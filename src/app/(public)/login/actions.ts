"use server";

import { emailIsVerified } from "@/app/lib/helper/email/emailIsVerified";

export async function emailIsVerifiedAction(email: string) {
  return await emailIsVerified(email);
}
