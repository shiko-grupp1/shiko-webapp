import { isValidEmail } from "./isValidEmail";

export async function emailIsVerified(email: string): Promise<boolean> {
  console.log("Checking email verification for:", isValidEmail(email));
  if (!isValidEmail(email)) return false;

  try {
    const authApiUrl = process.env.AUTHENTICATION_API_URL;

    const res = await fetch(`${authApiUrl}/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (!res.ok) return false;
    const data = await res.json();

    return !!data.isVerified;
  } catch (error) {
    console.error("Error checking email verification:", error);
    return false;
  }
}
