import { BsSuitHeart } from "react-icons/bs"; //no like
import { BsSuitHeartFill } from "react-icons/bs"; //liked

import { useState } from "react";
import { Recipe } from "./Recipe";
import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";

//full heart saves to local storage/on click removes from local storage

//display local storage on favourites

export const LikeButton = ({ recipe, isFavourite, setFavourites }) => {
  const [isActive, setIsActive] = useState(isFavourite || false);

  const handleClick = () => {
    const recipesFromLS = getDataFromLocalStorage("recipes", []);

    if (!isActive) {
      recipesFromLS.push(recipe);

      localStorage.setItem("recipes", JSON.stringify(recipesFromLS));

      setIsActive(true);

      if (isFavourite) {
        setFavourites(recipesFromLS);
      }
    } else {
      const filteredRecipes = recipesFromLS.filter(
        (item) => item.id !== recipe.id
      );

      localStorage.setItem("recipes", JSON.stringify(filteredRecipes));

      setIsActive(false);

      if (isFavourite) {
        setIsActive(true);
        setFavourites(filteredRecipes);
      }
    }
  };

  return (
    <button className="flex btn btn-outline-success" onClick={handleClick}>
      {isActive ? (
        <BsSuitHeartFill style={{ fontSize: "20px" }} />
      ) : (
        <BsSuitHeart style={{ fontSize: "20px" }} />
      )}
    </button>
  );
};
