import React, { useContext, useState } from "react";
import { RecipeContext } from "../Context/RecipeContext";

const mealType = [
  "Breakfast",
  "Lunch",
  "Snack",
  "Snacks",
  "Dinner",
  "Dessert",
  "Side Dish",
  "Appetizer",
  "Beverage",
];

const FilterComponent = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { mealTags, setMealTypeFilter, handleMealTagFilter, mealTypeFilter } =
    useContext(RecipeContext);

  return (
    <div className="w-full flex flex-col items-center md:w-3/12  ">
      <div
        onClick={() => setShowFilters(!showFilters)}
        className={`filters-show-or-hide  ${
          showFilters && "border-b-2 border-slate-100"
        }`}
      >
        <h1>Filter By</h1>
        <p>&#129170;</p>
      </div>
      <div className={`${!showFilters && "hidden md:block"} filters-main`}>
        <h1>Filter By</h1>
        <div className="filter-meal-type">
          <p>Meal Type</p>
          {mealTypeFilter === "" ? null : (
            <button className="mr-3" onClick={() => setMealTypeFilter("")}>
              Clear &#10006;
            </button>
          )}
        </div>
        <ul className="filter-meal-type-list">
          {mealType.sort().map((eachMeal) => {
            return (
              <li key={`${eachMeal}`}>
                <input
                  type="radio"
                  id={eachMeal}
                  value={eachMeal}
                  name="mealType"
                  checked={mealTypeFilter === eachMeal}
                  onChange={(e) => setMealTypeFilter(e.target.value)}
                />
                <label className="cursor-pointer" htmlFor={`${eachMeal}`}>
                  {eachMeal}
                </label>
              </li>
            );
          })}
        </ul>

        <p className="filter-cuisine">
          Cuisine
        </p>
        <ul className="filter-cuisine-list">
          {mealTags.map((eachTag) => {
            return (
              <li key={`${eachTag}`}>
                <input
                  type="checkbox"
                  id={eachTag}
                  value={eachTag}
                  className="h-4 w-4"
                  onChange={handleMealTagFilter}
                />
                <label htmlFor={`${eachTag}`}>{eachTag}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;
