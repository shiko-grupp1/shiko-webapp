import DashboardIcon from "../components/icons/dashboardIcon";
import MenuItem from "../components/ui/MenuItem/MenuListItem";

export default function Home() {
  const menuItem = {
    icon: <DashboardIcon />,
    text: "Dashboard",
    isActive: true,
    notifications: 3,
  };

  return (
    <>
      <h1 className="">HOME</h1>
      <div className="test">
        <MenuItem menuItem={menuItem} />
      </div>
    </>
  );
}
