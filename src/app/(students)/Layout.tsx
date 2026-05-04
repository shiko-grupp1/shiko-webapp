import Sidebar from "../components/sidebar/SideBar";

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}