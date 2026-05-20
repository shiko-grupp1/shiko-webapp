import type { Metadata } from "next";
import AdminShell from "./AdminShell";
import AuthProtected from "../components/Auth/AuthProtected";

export const metadata: Metadata = {
  title: "Admin | Shiko",
  description: "Admin area for Shiko",
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProtected allowRoles={["Admin"]}>
      <AdminShell>{children}</AdminShell>
    </AuthProtected>
  );
}
