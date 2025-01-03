import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../shared/constants/routes";
import useTheme from "../../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../../../src/assets/images/jobhub-logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { user, setUser, signOutUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Succussfully Signed out!");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.code);
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
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500"
              : ""
          }
          to={ROUTES.HOME}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500"
              : ""
          }
          to={ROUTES.ALLJOBS}
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500"
              : ""
          }
          to={ROUTES.TOSIGNUP}
        >
          Sign Up
        </NavLink>
      </li>
      {user && user?.email ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500"
                  : ""
              }
              to={ROUTES.MYAPPLICATIONS}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500"
                  : ""
              }
              to={ROUTES.ADDJOB}
            >
              Add Job
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent font-semibold text-blue-500 dark:text-blue-400 focus:bg-transparent focus:text-blue-500"
                  : ""
              }
              to={ROUTES.MYPOSTEDJOBS}
            >
              Posted Jobs
            </NavLink>
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
        pathname === ROUTES.HOME ||
        pathname === ROUTES.TOLOGIN ||
        pathname === ROUTES.TOSIGNUP
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
            <Link
              to={ROUTES.HOME}
              className={`btn btn-ghost text-xl text-gray-800 font-semibold pl-0 ${
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
              <button
                onClick={handleLogOut}
                className="btn btn-sm dark:bg-blue-500 dark:text-white font-medium"
              >
                Logout <FiLogOut size={18} />
              </button>
            ) : (
              <Link
                to={ROUTES.TOLOGIN}
                className="btn btn-sm dark:bg-blue-500 dark:text-white font-medium"
              >
                <FiLogIn size={18} /> Login
              </Link>
            )}
            {/* dropdown menu */}
            <div className="dropdown ml-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-0"
              >
                <AiOutlineMenu size={20} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow right-0"
              >
                {navlinks}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
