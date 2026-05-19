"use server";

export type AuthenticateResponse = {
  succeeded: boolean;
  errors: string[];
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
  expiresAt?: string;
  user?: {
    userId?: string;
    email?: string;
    roles: string[];
  };
};

export default async function authenticate(email: string, password: string) {
  const response = await fetch(
    "https://shiko-group1-auth.azurewebsites.net/api/authentication/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.AUTH_API_KEY || "",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  return await response.json();
}
