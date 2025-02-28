import { AlignJustify, HamIcon } from "lucide-react";
import logo from "../../assets/logo.svg";
import React from "react";

const TopBar = () => {
  return (
    <div className="navbar bg-caribeanCurrent text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AlignJustify />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-spaceCadet dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Popular</a>
            </li>
            <li>
              <a>Cuisine</a>
              <ul className="p-2">
                <li>
                  <a>Nepali</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Dinner</a>
            </li>
            <li>
              <a>Meal</a>
            </li>
            <li>
              <a>Beverage</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img height="36" width="36" src={logo} />
          <div className="max-sm:hidden">

          Kitchening
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  ">
          <li>
            <a>Popular</a>
          </li>
          <li>
            <details className="">
              <summary>Cuisine</summary>
              {/* TODO: Add some cuisines here to show  */}
              <ul className="p-2">
                <li>
                  <a>Nepali</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>{" "}
          <li>
            <a>Dinner</a>
          </li>
          <li>
            <a>Meal</a>
          </li>
          <li>
            <a>Beverages</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-spaceCadet bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Your Recipes</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
