import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../Context/RecipeContext";

const SearchComponent = ({ className, searchClassName, buttonClassName }) => {
  const { inputValue, setInputValue } = useContext(RecipeContext);
  const navigate = useNavigate();

  return (
    <div className={`flex-row justify-center items-center ${className}`}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={` px-4 h-11 rounded-s-full ${searchClassName} `}
        placeholder="Search Recipes"
        type="text"
        onKeyUp={(e) => {
          e.key === "Enter" && navigate("/recipes", { replace: true });
        }}
      />
      <button
        onClick={() => navigate("/recipes", { replace: true })}
        className={`${buttonClassName}`}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchComponent;
