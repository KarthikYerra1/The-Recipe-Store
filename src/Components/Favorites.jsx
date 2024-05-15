import React, { useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext";
import RecipeItem from "./RecipeItem";
import NoData from "./NoData";

const Favorites = () => {
  const { favorites } = useContext(RecipeContext);

  if (favorites.length === 0) {
    return (
      <div className="pt-20 h-screen flex flex-col justify-center items-center">
        <NoData />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 pt-20 px-8">
      <h1 className="font-teachers text-xl md:text-3xl font-bold text-slate-800 mt-5">
        Your Favorite Recipes
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {favorites.map((each) => (
          <RecipeItem key={each.id} details={each} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
