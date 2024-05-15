import NoDataImg from "../Images/noData.svg";
import { useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext";
import { useNavigate } from "react-router-dom";

const NoData = () => {
  const { setInputValue } = useContext(RecipeContext);
  const navigate = useNavigate();

  const goToRecipes = () => {
    setInputValue("");
    navigate("/recipes");
  };

  return (
    <>
      <img src={NoDataImg} alt="No Data" height={300} width={310} />
      <h1 className="text-teachers font-bold text-lg md:text-2xl ">
        No Data Found
      </h1>
      <button
        onClick={goToRecipes}
        className="mt-2 bg-slate-700 text-white py-2 px-3 text-nunito rounded-md text-sm"
      >
        Go To Recipes
      </button>
    </>
  );
};

export default NoData;
