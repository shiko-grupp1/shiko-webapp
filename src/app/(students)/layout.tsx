import AuthProtected from "../components/Auth/AuthProtected";
import Sidebar from "../components/sidebar/SideBar";

export default function StudentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProtected allowRoles={["Student", "Instructor"]}>
      <div className="layout">
        <Sidebar />
        <main>{children}</main>
      </div>
    </AuthProtected>
  );
}
