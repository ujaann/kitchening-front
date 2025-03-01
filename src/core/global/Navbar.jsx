import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
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
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <details>
                <summary>Cuisine</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/cuisine/nepali">Nepali</Link>
                  </li>
                  <li>
                    <Link to="/cuisine/submenu-2">Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/dinner">Dinner</Link>
            </li>
            <li>
              <Link to="/meal">Meal</Link>
            </li>
            <li>
              <Link to="/beverages">Beverages</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img height="36" width="36" src={logo} alt="Logo" />
          <div className="max-sm:hidden">Kitchening</div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <details>
              <summary>Cuisine</summary>
              <ul className="p-2 text-spaceCadet">
                <li>
                  <Link to="/cuisine/nepali">Nepali</Link>
                </li>
                <li>
                  <Link to="/cuisine/submenu-2">Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/dinner">Dinner</Link>
          </li>
          <li>
            <Link to="/meal">Meal</Link>
          </li>
          <li>
            <Link to="/beverages">Beverages</Link>
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
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-spaceCadet bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/your-recipes">Your Recipes</Link>
            </li>
            <li>
              <Link to="/create-recipe">Create a Recipe</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
