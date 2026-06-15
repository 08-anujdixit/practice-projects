import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../index.js";
import authService from "../../appwrite/auth.js";
import LogoutBtn from "../Logout.jsx";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  return (
    <>
      <nav className="relative bg-indigo-700 dark:bg-black-800/50  dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                command="--toggle"
                commandfor="mobile-menu"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only text-white">Open main menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 in-aria-expanded:hidden"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 not-in-aria-expanded:hidden"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Navbar pc buttons */}
            {/* Logo */}
            <div>
              <h3 className="text-white italic">Logo</h3>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify">
              <div className="flex shrink-0 items-center"></div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    aria-current="page"
                    className={({ isActive }) =>
                      `
                    rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white
                    ${isActive ? "bg-gray-900/50" : ""}
                    `
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      `
                    rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white
                    ${isActive ? "bg-gray-900/50" : ""}
                    `
                    }
                  >
                    Blogs
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `
                    rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white
                    ${isActive ? "bg-gray-900/50" : ""}
                    `
                    }
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    className="
                    rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white
                    "
                    onClick={() => {
                      document
                        .getElementById("footer-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
              <div className="hidden sm:flex ml-auto items-center gap-3">
                {!authStatus ? (
                  <>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `
                    rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white
                    ${isActive ? "bg-gray-900/50" : ""}
                    `
                      }
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        `
                    rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white
                    ${isActive ? "bg-gray-900/50" : ""}
                    `
                      }
                    >
                      Sign Up
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/addblog"
                      className={({ isActive }) =>
                        `
                    rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white
                    ${isActive ? "bg-gray-900/50" : ""}
                    `
                      }
                    >
                      Add Blog
                    </NavLink>
                    <LogoutBtn />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              to="/"
              aria-current="page"
              className={({ isActive }) => `
                  block rounded-md px-3 py-2 text-base font-medium text-white
                  ${isActive ? "bg-gray-900/50" : ""}
              `}
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) => `
                  block rounded-md  px-3 py-2 text-base font-medium text-white 
                  ${isActive ? "bg-gray-900/50" : ""}
              `}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `
                  block rounded-md  px-3 py-2 text-base font-medium text-white 
                  ${isActive ? "bg-gray-900/50" : ""}
              `}
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => {
                document
                  .getElementById("footer-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Contact us
            </NavLink>
          </div>
        </el-disclosure>
      </nav>
    </>
  );
}

export default Header;
