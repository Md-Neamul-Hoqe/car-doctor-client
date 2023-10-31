import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "../../../index.css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, LogOut, setLoading } = useContext(AuthContext);

  const handleLogOut = () => {
    setLoading(true)
    LogOut()
      .then(() => {})
      .catch((error) => console.error(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to={`/bookings?email=${user?.email}`}>Cart</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user?.email ? (
        <li>
          <button onClick={handleLogOut}>Log Out</button>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <nav className="navbar bg-base-100 h-28 mb-4 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <img src={logo} alt="Car Doctor" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline text-logo-red hover:border-logo-red hover:text-logo-red">
          Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
