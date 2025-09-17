import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-dark text-ivory shadow-md">
      <h1 className="text-xl font-bold">ClosetMate</h1>
      <div className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/closet">Closet</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
