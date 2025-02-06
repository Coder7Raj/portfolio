import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar text-white flex justify-between">
        <div className="navbar-start">
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
                <Link>f</Link>
              </li>
              <li>
                <Link>f</Link>
              </li>{" "}
              <li>
                <Link>f</Link>
              </li>{" "}
              <li>
                <Link>f</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl px-0 lg:px-2 md:px-2">daisyUI</a>
        </div>
        <div className="navbar-end hidden md:flex lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>first</Link>
            </li>
            <li>
              <Link>second</Link>
            </li>{" "}
            <li>
              <Link>theird</Link>
            </li>{" "}
            <li>
              <Link>fourth</Link>
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
