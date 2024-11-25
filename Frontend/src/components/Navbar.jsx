import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="text-white py-4 fixed w-full top-0 z-10 shadow-md">
    <div className="container mx-auto flex justify-between items-center px-6">
      <Link to="/" className="text-3xl font-extrabold tracking-wide">
        Ashutosh Shukla
      </Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-accent transition">Home</Link>
        <Link to="/about" className="hover:text-accent transition">About</Link>
        <Link to="/projects" className="hover:text-accent transition">Projects</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
