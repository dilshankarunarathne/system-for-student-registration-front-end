import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-500 p-6">
      <div className="text-white text-2xl">My App</div>
      <div>
        <Link to="/dashboard" className="text-white mx-2">Dashboard</Link>
        <Link to="/login" className="text-white mx-2">Login</Link>
        <Link to="/register" className="text-white mx-2">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
