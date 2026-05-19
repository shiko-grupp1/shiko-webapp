"use client";

import React, { useState } from "react";
import InputField from "../../shared/InputField/InputField";
import Link from "next/link";
import { Button } from "../../shared/Button/Button";
import { UserPlaceholderIcon } from "../../icons/UserPlaceholderIcon";
import { useRouter } from "next/navigation";
import checkEmailStatus from "../../../(public)/welcome/actions";
import { CheckEmailStatusResponse } from "@/app/(public)/welcome/actions";


export default function WelcomeForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (error) {
      setError("");
    }
  }

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleOnSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email address is required");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");
    try {
      const data = await checkEmailStatus(email) as CheckEmailStatusResponse;
      
      if (!data.succeeded) {
        setError(data.error || "Something went wrong");
        return;
      }

      if (!data.emailExists) {
        setError("This email address is not registered. Contact an administartor.");
        return;
      }

      sessionStorage.setItem("email", email);

      if (data.emailExists && data.isVerified) {
        router.push("/login");
        return;
      }

      if (data.emailExists && !data.isVerified){
        router.replace("/verification");
        return;
      }

      setError("Unexpected problem. Try again later.");
    } catch {
      setError("Network error, please try again");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleOnSubmit} method="post" className="mt-20">
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
