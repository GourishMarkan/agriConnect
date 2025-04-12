// This will be the updated code for each file with improved CSS and color theme
// We'll start with the Navbar component

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <nav
      className={`${
        show ? "h-30" : "h-20"
      } flex justify-between px-8 py-4 bg-white shadow-md items-center transition-height duration-300`}
    >
      <div className="flex items-center gap-8">
        <img src="/hand-drawn-tractor-silhouette-illustration.png" alt="logo" className="w-28 lg:w-20 md:w-16 sm:w-10" />
      </div>
      <div
        className={`${
          show ? "flex flex-col" : "hidden sm:flex"
        } w-full sm:w-auto items-center sm:flex-row sm:justify-between sm:gap-12`}
      >
        <ul className="flex flex-col sm:flex-row sm:gap-12 font-semibold items-center">
          {[
            { path: "/", label: "HOME" },
            { path: "/blogs", label: "INFORMATION" },
            { path: "/jobs", label: "CROPS" },
          ].map((link) => (
            <li key={link.path} className="list-none">
              <Link
                to={link.path}
                className="text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                onClick={() => setShow(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="list-none">
            <Link
              to={isAuthenticated ? "/dashboard" : "/login"}
              className="text-gray-800 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setShow(false)}
            >
              {isAuthenticated ? "DASHBOARD" : "LOGIN"}
            </Link>
          </li>
        </ul>
      </div>
      <GiHamburgerMenu
        className="block sm:hidden text-2xl cursor-pointer"
        onClick={() => setShow(!show)}
      />
    </nav>
  );
};

export default Navbar;
