type AuthFormProps = {
  title: string;
  paragraph: string;
  formComponent: React.ReactNode;
};

export default function AuthForm({ title, paragraph, formComponent }: AuthFormProps) {
  return (
    <div className="p-20 grid content-center">
      <h1 className="body-70">{title}</h1>
      <p className="body-20 text-muted">{paragraph}</p>
      {formComponent}
    </div>
  );
}
