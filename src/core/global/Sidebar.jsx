import React from "react";
import { User, Plus, Heart, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
      <li className="flex">
        <a>
          <User />
          Profile
        </a>
      </li>
      <li className="flex">
        <a>
          <Plus />
          Create Recipe
        </a>
      </li>
      <li className="flex">
        <a>
          <Heart />
          Your Favourites
        </a>
      </li>
      <li className="flex">
        <a>
          <Settings />
          Settings
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
