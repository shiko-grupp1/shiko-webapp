"use client";
import AuthForm from "@/app/components/authentication/AuthForm/AuthForm";
import WelcomeForm from "@/app/components/authentication/Forms/WelcomeForm";

export default function Welcome() {
  return (
    <AuthForm
      title="Welcome"
      paragraph="Please log in to your account to continue."
      formComponent={<WelcomeForm />}
    />
  );
}
