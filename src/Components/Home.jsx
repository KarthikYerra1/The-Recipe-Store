import React from "react";
import { NavLink } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import bgImage from "../Images/bg-image.jpg";

const Home = () => {
  return (
    <div className="home-main" style={{ backgroundImage: `url(${bgImage})` }}>
      <SearchComponent
        className="inline-flex md:hidden w-10/12 mb-6 "
        searchClassName="text-slate-200 shadow-lg w-10/12 outline-none border-slate-200 border-2 bg-slate-800 bg-opacity-50"
        buttonClassName="bg-slate-800 bg-opacity-50 border-t-2 border-r-2 border-b-2 shadow-lg h-11 px-4 rounded-r-full outline-none border-slate-200 text-white flex flex-row justify-center items-center"
      />
      <h1 className="home-h1">
        "Discover endless culinary inspiration at <br />
        <br />
        <span className="text-3xl text-gray-400 md:text-5xl">
          The Recipe Store.
        </span>
        <br />
        <br />
        Explore a world of flavors, <br />
        from savory classics to exotic delights.
        <br />
        Start your delicious journey today!"
      </h1>

      <NavLink to="/recipes">
        <button className="home-btn">Find Recipes</button>
      </NavLink>
    </div>
  );
};

export default Home;
