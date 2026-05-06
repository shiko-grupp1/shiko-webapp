import "server-only";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { UserRole } from "@/types/roles";

type AuthProtectedProps = {
  children: React.ReactNode;
  allowRoles?: UserRole[];
};

const redirectLocation = "/login";

export default async function AuthProtected({
  children,
  allowRoles = ["Admin"],
}: AuthProtectedProps) {
  const session = await getServerSession(authOptions);

  if (!session) redirect(redirectLocation);

  const userRole = session.user.role as UserRole;

  const isAuthorized = userRole === "Admin" || allowRoles.includes(userRole);

  if (!isAuthorized) redirect("/");

  return <>{children}</>;
}
