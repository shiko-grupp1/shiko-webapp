import type { Metadata } from "next";
import AuthForm from "../components/authentication/AuthForm/AuthForm";

export const metadata: Metadata = {
  title: "Shiko | Welcome",
  description: "",
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <section className="p-8">
        <div className="bg-white rounded-4xl container mx-auto grid grid-cols-[auto_1fr]">
          <div className="relative max-w-3xl">
            <img className="rounded-4xl" aria-hidden="true" src="/images/signin_image.png" />
            <img
              className="absolute top-12 left-12"
              src="/images/shikologo-white.png"
              aria-hidden="true"
            />
          </div>

          {children}
        </div>
      </section>
    </main>
  );
}
