import React from "react";

const Sidebar = () => {
  return (
    <ul className="menu  pt-2 w-80 bg-base-100 min-h-full text-base-content">
      <li className="flex">
        <a>Profile</a>
      </li>
      <li className="flex">
        <a>Create Recipe</a>
      </li>
      <li className="flex">
        <a>Your Favourites</a>
      </li>
      <li className="flex">
        <a>Settings</a>
      </li>
    </ul>
  );
};

export default Sidebar;
