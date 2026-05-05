"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { checkEmailExists } from "./actions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const handleNext = async () => {
    setError("");
    const exists = await checkEmailExists(email);
    if (exists) {
      setStep(2);
    } else {
      setError("No account found with that email.");
    }
  };

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/admin",
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-xl mb-4">Sign In</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full p-2 border mb-4"
          required
          disabled={step === 2}
        />

        {step === 1 && (
          <button type="button" onClick={handleNext} className="w-full bg-blue-600 text-black p-2">
            Next
          </button>
        )}

        {step === 2 && (
          <>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border mb-4"
              autoFocus
              required
            />
            <button type="submit" className="w-full bg-green-600 text-black p-2">
              Sign In
            </button>
            <button type="button" onClick={() => setStep(1)} className="text-sm mt-2 text-black">
              Use a different email
            </button>
          </>
        )}
      </form>
    </div>
  );
}
