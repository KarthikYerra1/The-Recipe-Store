import { useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext";
import RecipeItem from "./RecipeItem";
import FilterComponent from "./FilterComponent";
import SearchComponent from "./SearchComponent";
import Loading from "./Loading";
import Error from "./Error";
import NoData from "./NoData";

const Recipes = () => {
  const { recipeData, loading, error } = useContext(RecipeContext);

  return (
    <div className="pt-20 min-h-screen bg-slate-300 flex flex-col md:flex-row">
      <SearchComponent
        className="inline-flex md:hidden w-11/12 mb-6 ml-auto mr-auto mt-2 "
        searchClassName="text-slate-200 px-5 shadow-lg w-10/12 outline-none border-slate-200 border-2 bg-slate-700"
        buttonClassName="bg-slate-700  border-t-2 border-r-2 border-b-2 shadow-lg h-11 px-4 rounded-r-full outline-none border-slate-200 text-white flex flex-row justify-center items-center"
      />
      <FilterComponent />

      <div className="recipes-main-div">
        {loading ? (
          <Loading />
        ) : error !== "" ? (
          <Error />
        ) : recipeData.length === 0 ? (
          <NoData />
        ) : (
          <>
            <h1 className="recipes-main-h1">
              Delicious Recipes Right Here....
            </h1>
            <div className="flex flex-col items-center">
              <ul className="recipes-main-list">
                {recipeData.map((eachRecipe) => (
                  <RecipeItem key={eachRecipe.id} details={eachRecipe} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Recipes;
