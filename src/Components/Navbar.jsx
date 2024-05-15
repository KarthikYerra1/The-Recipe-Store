import React, { useContext, useState } from "react";

import { NavLink } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import { HiMenu } from "react-icons/hi";
import { RecipeContext } from "../Context/RecipeContext";

const Navbar = () => {
  const {favorites} = useContext(RecipeContext)
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      {/* Brand Logo Or Text Home Route */}
      <div className="nav-div">
        <NavLink to="/">
          <h1>
            The Recipe <br />
            Store
          </h1>
        </NavLink>
        {/* Brand Logo Finished */}

        {/* Search Component */}
        <SearchComponent
          className="hidden md:inline-flex md:w-6/12"
          searchClassName="text-slate-200 w-10/12 outline-none border-slate-200 border-2 bg-transparent"
          buttonClassName="bg-transparent w-2/12 border-t-2 border-r-2 border-b-2 h-11 px-4 rounded-r-full outline-none border-slate-200 text-white flex justify-center items-center"
        />
        {/* Search Component Finished */}

        {/* Menu Icon for smaller devices < 768px */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden outline-none"
        >
          <HiMenu color="white" size={40} />
        </button>
      </div>

      {/* Nav Link List */}

      <ul
        className={`flex md:flex-row md:inline-flex md:justify-end md:static   gap-4 ${
          showMenu
            ? " absolute flex-col top-20 left-0 md:w-4/12 py-4 bg-gray-700 border-t-2 border-slate-200 md:border-none w-full items-center"
            : "hidden"
        } `}
      >
        <li onClick={() => setShowMenu(!showMenu)}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "menu-nav-active" : "menu-nav-inactive";
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li onClick={() => setShowMenu(!showMenu)}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "menu-nav-active" : "menu-nav-inactive";
            }}
            to="/recipes"
          >
            Recipes
          </NavLink>
        </li>
        <li onClick={() => setShowMenu(!showMenu)}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "menu-nav-active" : "menu-nav-inactive";
            }}
            to="/favorites"
          >
            Favorites <span className="text-xs font-bold bg-orange-400 p-2 rounded-md">{favorites.length}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
