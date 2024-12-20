import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../shared/constants/routes";
import useTheme from "../../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../../../src/assets/images/jobhub-logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { user, setUser, signOutUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        alert("User Signed out!");
        setUser(null);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const topScroll = window.scrollY;
      setIsSticky(topScroll > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlinks = (
    <>
      <li>
        <NavLink className={({isActive}) => isActive ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500": ""} to={ROUTES.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive}) => isActive ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500": ""} to={ROUTES.TOLOGIN}>Login</NavLink>
      </li>
      <li>
        <NavLink className={({isActive}) => isActive ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500": ""} to={ROUTES.TOSIGNUP}>Sign Up</NavLink>
      </li>
      {user && user?.email ? (
        <>
          <li>
            <NavLink className={({isActive}) => isActive ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500": ""} to={ROUTES.MYAPPLICATIONS}>Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500": ""} to={ROUTES.ADDJOB}>Add Job</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500": ""} to={ROUTES.MYPOSTEDJOBS}>Posted Jobs</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <header
      className={`fixed w-full transition-all duration-300 z-50 ${
        pathname === "/" ||
        pathname === "/auth/login" ||
        pathname === "/auth/signup"
          ? "bg-transparent"
          : "bg-white dark:bg-gray-950"
      } ${
        isSticky
          ? "fixed bg-white dark:bg-gray-950 shadow-md border-0 dark:border-b dark:border-b-gray-800"
          : "bg-transperant dark:border-b dark:border-b-transparent"
      }`}
    >
      <nav className="max-w-[1400px] w-full mx-auto px-4 md:px-8 xl:px-10">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-0"
              >
                <AiOutlineMenu size={20} />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg> */}
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <Link
              to={ROUTES.HOME}
              className={`btn btn-ghost text-xl text-gray-800 font-semibold ${
                isSticky
                  ? "text-gray-800 dark:text-gray-100"
                  : "dark:text-gray-100"
              }`}
            >
              <img src={logo} alt="job portal logo" className="w-8 sm:w-10" />
              JobHub
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
          </div>
          <div className="navbar-end">
            <button
              className="btn btn-xs btn-ghost btn-circle tooltip tooltip-left mr-2"
              data-tip={theme === "light" ? "dark" : "light"}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <FaMoon size={20} className="text-gray-800" />
              ) : (
                <FaSun size={20} className="text-yellow-300" />
              )}
            </button>
            {user && user?.email ? (
              <button onClick={handleLogOut} className="btn btn-sm dark:bg-blue-500 dark:text-white font-medium">
                Logout <FiLogOut size={18} />
              </button>
            ) : (
              <Link to={ROUTES.TOLOGIN} className="btn btn-sm dark:bg-blue-500 dark:text-white font-medium">
                <FiLogIn size={18} /> Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
