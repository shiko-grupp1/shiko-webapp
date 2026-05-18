type AuthFormProps = {
  title: string;
  paragraph: string;
  formComponent: React.ReactNode;
};

export default function AuthForm({ title, paragraph, formComponent }: AuthFormProps) {
  return (
    <div className="p-24 grid content-center">
      <h1 className="body-70">{title}</h1>
      <p className="body-20 text-muted mb-24">{paragraph}</p>
      {formComponent}
    </div>
  );
}
