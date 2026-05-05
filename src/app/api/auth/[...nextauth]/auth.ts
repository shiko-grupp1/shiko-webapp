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
        // const res = await fetch("https://your-api.com/login", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });

        // const data = await res.json();

        const data = {
          succeeded: true,
          errors: [],
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcklkIjoiMTIzdXNlcmlkIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsInJvbGVzIjpbIkFkbWluIl0sImlhdCI6MTUxNjIzOTAyMn0.EkBtg-8o7FpgHYJsUuc69FMDhqXQH69Pa5BDATJ9hkk",
          tokenType: "Bearer",
          expiresIn: 600,
          expiresAtUtc: new Date(Date.now() + 600000).toISOString(),
          refreshToken: "mock-refresh-token-abc",
          user: {
            userId: "16fc71d2-101c-41da-b6db-e9c3ac54c0c6",
            email: "admin@shiko.com",
            roles: ["Admin"],
          },
        };

        if (data)
          // if (res.ok && data.succeeded)
          return {
            id: data.user.userId,
            token: data.accessToken,
            refreshToken: data.refreshToken,
            role: data.user.roles[0],
            email: data.user.email,
            expiresIn: data.expiresIn,
          };

        return null;
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

      //TODO: Implement, token refresh logic here if your API supports it

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      return session;
    },
  },
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

export default NextAuth(authOptions);
