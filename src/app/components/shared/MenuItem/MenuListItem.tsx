type MenuItem = {
  icon: React.ReactNode;
  text: string;
  href: string;
  isActive: boolean;
  notifications?: number;
};
type MenuItemProps = {
  menuItem: MenuItem;
};

export default function MenuListItem({ menuItem }: MenuItemProps) {
  const itemClassName = `menu-item ${menuItem.isActive ? "active" : ""}`;
  return (
    <li className={itemClassName}>
      <a href={menuItem.href}>
        <div className="left-column">
          <span className="menu-icon">{menuItem.icon}</span>{" "}
          <span className="menu-text">{menuItem.text}</span>
        </div>
        {menuItem.notifications ? (
          <div className="notification">
            <span>{menuItem.notifications}</span>
          </div>
        ) : null}
      </a>
    </li>
  );
}
