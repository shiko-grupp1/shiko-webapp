import { emailIsVerified } from "@/app/lib/helper/email/emailIsVerified";
import { isValidEmail } from "@/app/lib/helper/email/isValidEmail";
import { loginRedirectLocation, refreshAccessTokenError } from "@/app/lib/variable";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password || !isValidEmail(credentials.email))
          throw new Error("InvalidEmailFormat");

        try {
          const authApiUrl = process.env.AUTHENTICATION_API_URL;

          const res = await fetch(`${authApiUrl}/login`, {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const contentType = res.headers.get("content-type");

          if (!contentType || !contentType.includes("application/json")) {
            console.error("API did not return JSON:", await res.text());
            throw new Error("ApiError");
          }

          const data = await res.json();

          if (res.status === 401) throw new Error("InvalidCredentials");

          if (res.ok && data.succeeded) {
            const isVerified = await emailIsVerified(credentials.email);
            if (!isVerified.isVerified) throw new Error("EmailNotVerified");

            return {
              id: data.user.userId,
              token: data.accessToken,
              refreshToken: data.refreshToken,
              role: data.user.roles[0],
              email: data.user.email,
              expiresIn: data.expiresIn,
            };
          }

          return null;
        } catch (error: Error | unknown) {
          console.error("Auth Exception:", (error as Error).message);
          throw new Error((error as Error).message || "InternalServerError");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.refreshToken = user.refreshToken;
        token.id = user.id;
        token.role = user.role;
        token.accessTokenExpires = Date.now() + user.expiresIn * 1000;
      }

      if (token.accessTokenExpires && Date.now() < (token.accessTokenExpires as number) - 30000)
        return token;

      try {
        const authApiUrl = process.env.AUTHENTICATION_API_URL;

        const res = await fetch(`${authApiUrl}/refresh`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refreshToken: token.refreshToken,
          }),
        });

        if (res.status === 401 || !res.ok) return { ...token, error: refreshAccessTokenError };

        const data = await res.json();

        if (!data.succeeded) return { ...token, error: refreshAccessTokenError };

        return {
          ...token,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken ?? token.refreshToken,
          accessTokenExpires: Date.now() + data.expiresIn * 1000,
        };
      } catch (error) {
        console.error("Refresh Token Error:", error);
        return { ...token, error: refreshAccessTokenError };
      }
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      session.error = token.error;

      return session;
    },
  },
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: loginRedirectLocation,
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

export default NextAuth(authOptions);
