/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import { RecipeContext } from "../Context/RecipeContext";

const RecipeDetails = () => {
  const { addToFavs, favorites } = useContext(RecipeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipeDetails, setRecipeDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getRecipeData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!response.ok) {
        throw new Error("Unable to fetch data from server");
      }
      const data = await response.json();
      setRecipeDetails(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipeData();
  }, [id]);

  const recipeIndex = favorites.filter((each) => each.id === recipeDetails.id);

  if (loading) {
    return (
      <div className="mt-3 pt-20 flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error !== "") {
    return (
      <div className="pt-20 flex flex-col items-center justify-center h-screen">
        <Error />
      </div>
    );
  }

  return (
    <div className="pt-20 flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center w-10/12  md:w-5/12 ">
        <img
          src={recipeDetails.image}
          width={350}
          alt="recipe"
          className="rounded-md hover:scale-105 duration-500 shadow-lg"
        />
        <button
          onClick={() => addToFavs(recipeDetails)}
          className="w-full max-w-80 bg-slate-700 py-2 px-2 text-slate-50 mt-3 rounded-lg text-sm"
        >
          {!recipeIndex.length ? "Add to Favorites" : "Remove from Favorites"}
        </button>

        <button
          onClick={() => navigate("/favorites")}
          className="w-full max-w-80 bg-slate-700 py-2 px-2 text-slate-50 mt-3 rounded-lg text-sm"
        >
          Go to Favorites
        </button>
        <div className="flex mt-5">
          <p className="font-nunito text-sm text-slate-700 font-semibold">
            ⭐ {recipeDetails.rating}
            <span className="ml-2">|</span>
          </p>
          <p className="ml-2 font-nunito text-sm text-slate-700 font-semibold">
            {recipeDetails.reviewCount} reviews{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:items-start w-full md:w-8/12 p-3">
        <div className="mt-3 flex justify-between items-center w-10/12 sm:w-6/12  px-4">
          <h2 className=" font-nunito text-base text-slate-900 font-bold ">
            Name:{" "}
          </h2>
          <p className="font-semibold font-teachers text-slate-600 text-base">
            {recipeDetails.name}
          </p>
        </div>
        <div className="mt-3 flex justify-between items-center w-10/12 sm:w-6/12  px-4">
          <h2 className=" font-nunito text-base text-slate-900 font-bold ">
            Cuisine Type:{" "}
          </h2>
          <p className="font-semibold font-teachers text- text-slate-600 text-base">
            {recipeDetails.cuisine}
          </p>
        </div>

        <div className="mt-3 flex justify-between items-center w-10/12 sm:w-6/12  px-4">
          <h2 className=" font-nunito text-base text-slate-900 font-bold ">
            Difficulty:{" "}
          </h2>
          <p className="font-semibold font-teachers text- text-slate-600 text-base">
            {recipeDetails.difficulty}
          </p>
        </div>

        <div className="mt-3 flex justify-between items-center w-10/12 sm:w-6/12  px-4">
          <h2 className=" font-nunito text-base text-slate-900 font-bold ">
            Preparation Time:{" "}
          </h2>
          <p className="font-semibold font-teachers text- text-slate-600 text-base">
            {recipeDetails.prepTimeMinutes} Mins
          </p>
        </div>

        <div className="mt-3 flex justify-between items-center w-10/12 sm:w-6/12  px-4">
          <h2 className=" font-nunito text-base text-slate-900 font-bold ">
            Cooking Time:{" "}
          </h2>
          <p className="font-semibold font-teachers text- text-slate-600 text-base">
            {recipeDetails.cookTimeMinutes} Mins{" "}
          </p>
        </div>

        <div className="mt-3 flex justify-between items-center w-10/12 sm:w-6/12  px-4">
          <h2 className=" font-nunito text-base text-slate-900 font-bold ">
            Meal Type:{" "}
          </h2>
          <p className="font-semibold font-teachers text- text-slate-600 text-base">
            {recipeDetails.mealType &&
              recipeDetails.mealType.length &&
              recipeDetails.mealType.map((each) => each + ",").join(" ")}
          </p>
        </div>

        <div className="mt-3 flex justify-between items-center w-10/12 sm:w-6/12  px-4">
          <h2 className=" font-nunito text-base text-slate-900 font-bold ">
            No. of Servings:{" "}
          </h2>
          <p className="font-semibold font-teachers text- text-slate-600 text-base">
            {recipeDetails.servings}
          </p>
        </div>

        <div className="mt-3 flex flex-col w-10/12 sm:w-6/12 md:w-8/12 border-2 border-slate-400   px-4">
          <h2 className=" font-nunito text-base border-b-2 border-slate-400 text-slate-900 font-bold ">
            Ingredients Required:{" "}
          </h2>
          <p className="font-semibold font-teachers text- text-slate-600 text-base">
            {recipeDetails.ingredients &&
              recipeDetails.ingredients.length &&
              recipeDetails.ingredients.map((each) => each + ",").join(" ")}
          </p>
        </div>

        <div className="mt-3 flex flex-col w-10/12 sm:w-6/12 md:w-8/12 border-2 border-slate-400   px-4">
          <h2 className=" font-nunito text-base border-b-2 border-slate-400 text-slate-900 font-bold ">
            How To Cook?
          </h2>
          <ol className="font-semibold font-teachers text-slate-600 text-base">
            {recipeDetails.instructions &&
              recipeDetails.instructions.length &&
              recipeDetails.instructions.map((eachInstruction, index) => (
                <li className="mb-2" key={index}>
                  {`${index + 1}. `}
                  {eachInstruction}
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
