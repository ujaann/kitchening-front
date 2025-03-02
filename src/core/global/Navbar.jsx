import { AlignJustify } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.png";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TopBar = () => {
  const { authInfo, logout } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
              <details>
                <summary>Cuisine</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/allRecipe/nepali">Nepali</Link>
                  </li>
                  <li>
                    <Link to="/allRecipe/chinese">Chinese</Link>
                  </li>
                  <li>
                    <Link to="/allRecipe/thai">Thai</Link>
                  </li>
                  <li>
                    <Link to="/allRecipe/american">American</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/allRecipe">All Recipes</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
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
            <details>
              <summary>Cuisine</summary>
              <ul className=" text-spaceCadet">
                <li>
                  <Link to="/allRecipe/nepali">Nepali</Link>
                </li>
                <li>
                  <Link to="/allRecipe/chinese">Chinese</Link>
                </li>
                <li>
                  <Link to="/allRecipe/thai">Thai</Link>
                </li>
                <li>
                  <Link to="/allRecipe/american">American</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/allRecipe">All Recipes</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src={profile}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-spaceCadet bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {authInfo.token ? (
              <>
                <li>
                  <a >
                  <span className="badge"> {authInfo.username} </span>
                 Your Profile</a>
                </li>
                <li>
                  <Link to="/your-recipes">Your Recipes</Link>
                </li>
                <li>
                  <Link to="/create-recipe">Create a Recipe</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
