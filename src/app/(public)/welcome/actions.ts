"use server";

export type CheckEmailStatusResponse = {
    succeeded: boolean;
    emailExists: boolean;
    isVerified: boolean;
    email?: string;
    error?: string;
}

export default async function checkEmailStatus(email: string) {
  const response = await fetch("https://localhost:4443/api/authentication/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.AUTH_API_KEY || "",
    },
    body: JSON.stringify({
      email,
    }),
  });

  return await response.json();
}
