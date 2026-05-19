"use client";

import { ChangeEvent, SubmitEventHandler, useEffect, useState } from "react";
import InputField from "../../shared/InputField/InputField";
import Link from "next/link";
import { Button } from "../../shared/Button/Button";
import { UserPlaceholderIcon } from "../../icons/UserPlaceholderIcon";
import LockPlaceholderIcon from "../../icons/LockPlaceholderIcon";
import { useRouter } from "next/navigation";
import authenticate, { AuthenticateResponse } from "@/app/(public)/login/actions";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("email");

    if (!savedEmail || savedEmail === "") {
      router.replace("/welcome");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      email: savedEmail,
    }));

    sessionStorage.removeItem("email");
  }, []);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleOnSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setError("");
    try {
      const submittedEmail = formData.email.trim();
      const submittedPassword = formData.password.trim();

      if (!submittedPassword || !submittedEmail) {
        setError("Invalid credentials");
        return;
      }

      const data = await authenticate(formData.email, formData.password) as AuthenticateResponse;

      if (!data.succeeded) {
        setError("Invalid credentials");
        return;
      }
    } catch {
      setError("Network error, please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      <form onSubmit={handleOnSubmit} method="post" className="mt-20">
        <InputField
          label="Email address"
          placeholder="Type your email address"
          value={formData.email}
          icon={<UserPlaceholderIcon />}
          name="email"
          id="email"
          onChange={handleOnChange}
        />

        <InputField
          label="Password"
          placeholder="Type your password"
          value={formData.password}
          icon={<LockPlaceholderIcon />}
          name="password"
          id="password"
          onChange={handleOnChange}
          type="password"
        />

        <div className="grid grid-cols-[1fr_auto]">
          <div>
            <input
              id="remberMe"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleOnChange}
              className="w-4 h-4"
            />
            <label className="w-full ml-3.5 body-16 text-muted" htmlFor="remberMe">
              Keep me logged in
            </label>
          </div>
          <Link href={"/welcome"} className="text-p-2 body-16 text-right inline-block w-full">
            Forgot your email address?
          </Link>
        </div>
        <Button disabled={isLoading} className="mt-14" size="large" type="submit">
          Continue
        </Button>
      </form>
    </>
  );
}
