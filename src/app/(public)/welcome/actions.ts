"use server";

export type CheckEmailStatusResponse = {
  succeeded: boolean;
  emailExists: boolean;
  isVerified: boolean;
  email?: string;
  error?: string;
};

export default async function checkEmailStatus(email: string) {
  const response = await fetch(
    "https://shiko-group1-auth.azurewebsites.net/api/authentication/check",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.AUTH_API_KEY || "",
      },
      body: JSON.stringify({
        email,
      }),
    }
  );

  return await response.json();
}
