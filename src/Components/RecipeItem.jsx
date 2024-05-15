/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../Context/RecipeContext";

const RecipeItem = ({ details }) => {
  const { addToFavs, favorites } = useContext(RecipeContext);
  const {
    name,
    image,
    id,
    rating,
    servings,
    cuisine,
    prepTimeMinutes,
    mealType,
    difficulty,
    tags,
    caloriesPerServing,
    reviewCount,
    cookTimeMinutes,
  } = details;

  const indexOfRecipe = favorites.filter((each) => each.id === id);

  return (
    <li className="recipe-item-main-li">
      <div>
        <img
          src={image}
          loading="lazy"
          className="w-72 h-44 rounded-md"
          alt={`${name}-img`}
        />
      </div>
      <div className="w-11/12 px-2">
        <div className="flex justify-between items-center  font-nunito  mt-2 ">
          <Link to={`/recipes/${id}`}>
            <h1 className="font-bold text-red-500 hover:underline text-sm underline-offset-4 w-4/6 ">
              {name} {`(${difficulty})`}
            </h1>
          </Link>
          <p className="text-slate-900 font-semibold text-xs">
            &#127775; <br /> {rating}
          </p>
        </div>

        <table className=" w-full  mt-1">
          <thead className="recipe-item-table-head">
            <tr className="text-center">
              <th colSpan="2" className="font-teachers text-sm">
                Recipe Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="recipe-item-tbody-tr">
              <td className="recipe-item-tbody-tr-td-1">Meal Type</td>
              <td className="recipe-item-tbody-tr-td-2">
                {mealType.map((each) => each + ",").join(" ")}
              </td>
            </tr>
            <tr className="recipe-item-tbody-tr">
              <td className="recipe-item-tbody-tr-td-1">Servings</td>
              <td className="recipe-item-tbody-tr-td-2">{servings}</td>
            </tr>
            <tr className="recipe-item-tbody-tr">
              <td className="recipe-item-tbody-tr-td-1">Cuisine</td>
              <td className="recipe-item-tbody-tr-td-2">{cuisine}</td>
            </tr>
            <tr className="recipe-item-tbody-tr">
              <td className="recipe-item-tbody-tr-td-1">Preparation Time</td>
              <td className="recipe-item-tbody-tr-td-2">
                {prepTimeMinutes} Mins
              </td>
            </tr>
            <tr className="recipe-item-tbody-tr">
              <td className="recipe-item-tbody-tr-td-1">Cooking Time</td>
              <td className="recipe-item-tbody-tr-td-2">
                {cookTimeMinutes} Mins
              </td>
            </tr>
            <tr className="recipe-item-tbody-tr">
              <td className="recipe-item-tbody-tr-td-1">
                Calories Per Serving
              </td>
              <td className="recipe-item-tbody-tr-td-2">
                {caloriesPerServing}
              </td>
            </tr>
            <tr className="recipe-item-tbody-tr">
              <td className="recipe-item-tbody-tr-td-1">No. of Reviews</td>
              <td className="recipe-item-tbody-tr-td-2">{reviewCount}</td>
            </tr>
          </tbody>
        </table>

        <ul className="flex flex-wrap gap-2 mt-3">
          {tags.map((eachTag, index) => (
            <li key={index} className="recipe-item-tags-list">
              {eachTag}
            </li>
          ))}
        </ul>

        <button
          onClick={() => addToFavs(details)}
          className="recipe-item-button"
        >
          {!indexOfRecipe.length ? "Add to Favorites" : "Remove from Favorites"}
        </button>
        <Link to={`/recipes/${id}`}>
          <button className="recipe-item-button">
            How to Cook?
          </button>
        </Link>
      </div>
    </li>
  );
};

export default RecipeItem;

