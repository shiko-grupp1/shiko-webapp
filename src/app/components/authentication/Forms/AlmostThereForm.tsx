"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import InputField from "../../shared/InputField/InputField";
import { UserPlaceholderIcon } from "../../icons/UserPlaceholderIcon";
import LockPlaceholderIcon from "../../icons/LockPlaceholderIcon";
import { Button } from "../../shared/Button/Button";
import { CompleteUserResponse } from "@/app/(public)/almost-there/actions";
import completeUser from "@/app/(public)/almost-there/actions";
import { isValidPassword } from "@/app/utils/validation";
import { clearRegistrationSession, getStoredSessionEmail } from "@/app/utils/registrationSession";

export default function AlmostThereForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  useEffect(() => {
    // sessionStorage.setItem("email", "student@domain.com");   //TESTING, REMOVE THIS LATER
    const storedEmail = getStoredSessionEmail();

    if (!storedEmail) {
      clearRegistrationSession();

      router.replace("/welcome");
      return;
    }

    const storedFirstName = sessionStorage.getItem("firstName");
    const storedLastName = sessionStorage.getItem("lastName");

    setFormData((prev) => ({
      ...prev,
      firstName: storedFirstName || "",
      lastName: storedLastName || "",
    }));
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
      const storedEmail = getStoredSessionEmail();

      if (!storedEmail) {
        setError("Session expired");
        return;
      }

      const submittedFirstName = formData.firstName.trim();
      const submittedLastName = formData.lastName.trim();
      const submittedPassword = formData.password.trim();
      const submittedConfirmedPassword = formData.confirmPassword.trim();

      if (
        !submittedFirstName ||
        !submittedLastName ||
        !submittedPassword ||
        !submittedConfirmedPassword
      ) {
        setError("All fields are required");
        return;
      }

      if (!isValidPassword(submittedPassword)) {
        setError(
          "Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character"
        );
        return;
      }

      if (submittedPassword !== submittedConfirmedPassword) {
        setError("Passwords do not match");
        return;
      }

      if (!formData.terms) {
        setError("You must agree with Terms and Conditions");
        return;
      }

      const data = (await completeUser(
        storedEmail,
        submittedFirstName,
        submittedLastName,
        submittedPassword,
        submittedConfirmedPassword
      )) as CompleteUserResponse;

      if (!data.succeeded) {
        setError(data.errors.join(",") || "An error occurred, please try again.");
        return;
      }

      clearRegistrationSession();

      router.push("/login");
    } catch {
      setError("Network error, please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} method="post" className="mt-10">
        <InputField
          label="First Name"
          placeholder="Type your first name"
          value={formData.firstName}
          icon={<UserPlaceholderIcon />}
          name="firstName"
          id="firstName"
          onChange={handleOnChange}
        />

        <InputField
          label="Last Name"
          placeholder="Type your last name"
          value={formData.lastName}
          icon={<UserPlaceholderIcon />}
          name="lastName"
          id="lastName"
          onChange={handleOnChange}
        />

        <div className="pt-14">
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

          <InputField
            label="Confirm Password"
            placeholder="Type your password again"
            value={formData.confirmPassword}
            icon={<LockPlaceholderIcon />}
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleOnChange}
            type="password"
          />
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-4 items-center mt-8">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleOnChange}
            className="w-4 h-4"
          />
          <label className="wbody-16 text-muted" htmlFor="terms">
            I agree with Terms and Conditions
          </label>
        </div>

        <Button disabled={isLoading} className="mt-8" size="large" type="submit">
          Continue
        </Button>

        {error && <p className="text-red-500 mt-8 text-center">{error}</p>}
      </form>
    </>
  );
}
