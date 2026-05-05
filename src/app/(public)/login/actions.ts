"use server";

export async function checkEmailExists(email: string) {
  console.log("Checking email:", email);
  const user = true;

  return !!user;
}
