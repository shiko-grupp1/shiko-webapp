import React, { useState } from "react";
import InputField from "../../shared/InputField/InputField";
import Link from "next/link";
import { Button } from "../../shared/Button/Button";
import { UserPlaceholderIcon } from "../../icons/UserPlaceholderIcon";
import { useRouter } from "next/navigation";
import checkEmailStatus from "../../../(public)/welcome/actions";

export default function WelcomeForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  async function handleOnSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const data = await checkEmailStatus(email);

      if (!data.succeeded) {
        setError(data.errors?.[0] || "Something went wrong");
        return;
      }

      if (data.isVerified) {
        localStorage.setItem("email", email);
        router.push("/login");
        return;
      }

      setError("Email address is not verified");
    } catch {
      setError("Network error, please try again");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleOnSubmit} method="post">
        <InputField
          type="email"
          label="Email address"
          placeholder="Type your email address"
          value={email}
          icon={<UserPlaceholderIcon />}
          name="email"
          id="email"
          onChange={handleOnChange}
        />

        <Link href={"/welcome"} className="text-p-2 body-16 text-right inline-block w-full">
          Forgot your email address?
        </Link>
        <Button type="submit" disabled={isLoading} className="mt-14" size="large">
          Continue
        </Button>
      </form>
    </>
  );
}
