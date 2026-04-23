import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Shiko</h2>

      <p className="section">MENU</p>

      <nav>
        <Link href="/">Dashboard</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/calendar">Calendar</Link>
        <Link href="/live">Live Class</Link>
      </nav>

      <p className="section">GENERAL</p>

      <nav>
        <Link href="/profile">Profile</Link>
        <Link href="/team">Team</Link>
        <Link href="/settings">Settings</Link>
        <Link href="/help">Help Center</Link>
      </nav>

      <Link href="/logout" className="logout">
        Log Out
      </Link>
    </aside>
  );
}
