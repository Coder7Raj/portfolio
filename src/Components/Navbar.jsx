import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div>
      <div className="navbar text-white flex justify-between">
        <div className="navbar-start lg:w-[40%] md:w-[20%]">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-0"
            >
              <svg
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
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  className="hover:text-accent hover:font-semibold"
                  to="technology"
                  smooth={true}
                  duration={1000}
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent hover:font-semibold"
                  to="projects"
                  smooth={true}
                  duration={1000}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent hover:font-semibold"
                  to="education"
                  smooth={true}
                  duration={1000}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent hover:font-semibold"
                  to="aboutMe"
                  smooth={true}
                  duration={1000}
                >
                  aboutMe
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent hover:font-semibold"
                  to="contact"
                  smooth={true}
                  duration={1000}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <p className="btn btn-ghost text-accent text-2xl px-0 lg:px-2 md:px-2">
            Raj_
          </p>
        </div>
        <div className="navbar-end hidden md:flex lg:flex lg:w-[60%] md:w-[80%]">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className="hover:text-accent hover:font-semibold"
                to="technology"
                smooth={true}
                duration={1000}
              >
                Technology
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-accent hover:font-semibold"
                to="projects"
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent hover:font-semibold"
                to="education"
                smooth={true}
                duration={1000}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent hover:font-semibold"
                to="aboutMe"
                smooth={true}
                duration={1000}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent hover:font-semibold"
                to="contact"
                smooth={true}
                duration={1000}
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <div>
            <button className="btn hover:bg-accent bg-accent outline-none border-none rounded-r-3xl rounded-l-3xl">
              Hire me
            </button>
          </div>
        </div>
        <div className="md:hidden lg:hidden flex justify-end items-center">
          <button className="btn btn-outline bg-accent hover:bg-accent rounded-r-3xl rounded-l-3xl">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
}
