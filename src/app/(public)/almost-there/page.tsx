import AuthForm from "@/app/components/authentication/AuthForm/AuthForm";
import AlmostThereForm from "@/app/components/authentication/Forms/AlmostThereForm";

export default function AlmostThere() {
  return (
    <AuthForm
      title="Almost There"
      paragraph="Before you can sign in you need to verify your profile information and set a strong password. For security reasons, your password must be at least 8 characters long and include uppercase and lowercase letters, numbers, and special characters."
      formComponent={<AlmostThereForm />}
    />
  );
}
