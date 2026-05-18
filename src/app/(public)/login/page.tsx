"use client";
import AuthForm from "@/app/components/authentication/AuthForm/AuthForm";
import LoginForm from "@/app/components/authentication/Forms/LoginForm";

export default function Login() {
  return (
    <AuthForm
      title="Enter Password"
      paragraph="Please enter your password to log in to your account."
      formComponent={<LoginForm />}
    />
  );
}
