export type CompleteUserResponse = {
    succeeded: boolean;
    errors: string[];
    userId?: string;
}

export default async function completeUser(email: string, firstName: string, lastName: string, password: string, confirmPassword: string) {
  const response = await fetch("https://localhost:4443/api/authentication/complete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.AUTH_API_KEY || "",
    },
    body: JSON.stringify({
      email,
      firstName,
      lastName,
      password,
      confirmPassword
    }),
  });

  return await response.json();
}
