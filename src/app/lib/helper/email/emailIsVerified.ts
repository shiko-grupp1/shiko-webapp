import { isValidEmail } from "./isValidEmail";

type EmailVerificationResult = { status: number; error?: string; isVerified?: false };

export async function emailIsVerified(email: string): Promise<EmailVerificationResult> {
  if (!isValidEmail(email)) return { status: 400, error: "Invalid email format" };

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
      next: { revalidate: 0 },
    });

    if (!res.ok) return { status: res.status, error: "Failed to check email verification" };
    const data = await res.json();

    return { status: res.status, isVerified: data.isVerified };
  } catch (error) {
    console.error("Error checking email verification:", error);
    return { status: 500, error: "Error checking email verification" };
  }
}
