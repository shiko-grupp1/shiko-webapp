"use client";

import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

import { Button } from "../../../../../components/shared/Button/Button";
import styles from "./UserForm.module.css";

const AUTH_API_URL = "https://shiko-group1-auth.azurewebsites.net";

const roles = ["Student", "Teacher", "Admin"] as const;
type RoleValue = (typeof roles)[number];

export default function UserForm() {
  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<RoleValue>("Student");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResultMessage(null);
    setErrorMessage(null);

    // const token = session?.accessToken;

    if (!AUTH_API_URL) {
      setErrorMessage("URL is missing.");
      return;
    }

    // if (!token) {
    //   setErrorMessage("No access token found in session.");
    //   return;
    // }

    setIsSubmitting(true);

    try {
      const token = "";
      const response = await fetch(`${AUTH_API_URL}/api/auth/admin/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          role: selectedRole,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setErrorMessage(errorText || `Create user failed (${response.status}).`);
        return;
      }

      setResultMessage(`User created: ${email}`);
      setEmail("");
      setSelectedRole("Student");
    } catch {
      setErrorMessage("Could not create user.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@example.com"
          required
          disabled={isSubmitting}
        />
      </label>

      <label className={styles.field}>
        <span>Role</span>
        <select
          value={selectedRole}
          onChange={(event) => setSelectedRole(event.target.value as RoleValue)}
          disabled={isSubmitting}
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </label>

      <Button type="submit" size="large" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create user"}
      </Button>

      {resultMessage ? <p className={styles.successMessage}>{resultMessage}</p> : null}
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
    </form>
  );
}

