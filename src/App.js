/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./Hooks";
import { RecipeContext } from "./Context/RecipeContext";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import Favorites from "./Components/Favorites";
import RecipeDetails from "./Components/RecipeDetails";
import NotFound from "./Components/NotFound";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("false");
  const [mealTypeFilter, setMealTypeFilter] = useState("");
  const [mealTags, setMealTags] = useState([]);
  const [selectedMealTags, setSelectedMealTags] = useState([]);
  const [favorites, setFavorites] = useLocalStorage("TRSFavorites", []);

  const getRecipesData = async () => {
    setLoading(true);
    try {
      const apiUrl = `https://dummyjson.com/recipes/search?q=${inputValue}&limit=50`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Unable to fetch Data");
      }
      const data = await response.json();
      let filteredData =
        mealTypeFilter === ""
          ? data.recipes
          : data.recipes.filter((each) =>
              each.mealType.includes(mealTypeFilter)
            );
      filteredData = filteredData.filter((eachItem) => {
        return selectedMealTags.every((eachTag) => {
          return eachItem.tags.includes(eachTag);
        });
      });
      setRecipeData(filteredData);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  const getMealTags = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/recipes/tags");
      const data = await response.json();
      setMealTags(data.sort());
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  const handleMealTagFilter = (e) => {
    if (e.target.checked) {
      setSelectedMealTags([...selectedMealTags, e.target.value]);
    } else {
      const newTags = selectedMealTags.filter(
        (each) => each !== e.target.value
      );
      setSelectedMealTags(newTags);
    }
  };

  const addToFavs = (details) => {
    let newFavsList = [];
    const index = favorites.findIndex((each) => each.id === details.id);
    if (index === -1) {
      newFavsList = [...favorites, details];
    } else {
      newFavsList = favorites.filter((each) => each.id !== details.id);
    }
    setFavorites(newFavsList);
  };

  useEffect(() => {
    getRecipesData();
  }, [inputValue, mealTypeFilter, selectedMealTags]);

  useEffect(() => {
    getMealTags();
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        setRecipeData,
        setInputValue,
        mealTags,
        recipeData,
        inputValue,
        loading,
        error,
        setMealTypeFilter,
        handleMealTagFilter,
        addToFavs,
        favorites,
        mealTypeFilter,
      }}
    >
      <main className="h-screen bg-cover">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </RecipeContext.Provider>
  );
}

export default App;
