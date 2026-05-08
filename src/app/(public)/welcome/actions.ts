"use server";
export default async function checkEmailStatus(email: string) {
  const response = await fetch(
    "https://shiko-group1-auth.azurewebsites.net/api/authentication/check",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }
  );

  return await response.json();
}
