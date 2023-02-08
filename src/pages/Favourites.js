import { useState, useEffect } from "react";
import { Recipe } from "../components/Recipe";
import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";

export const Favourites = () => {
  const [favourites, setFavourites] = useState();

  useEffect(() => {
    const favouritesFromLS = getDataFromLocalStorage("recipes", []);

    setFavourites(favouritesFromLS);
  }, [setFavourites]);

  console.log(favourites);

  return (
    <div>
      {favourites &&
        favourites.length !== 0 &&
        favourites.map((recipe) => (
          <Recipe
            recipe={recipe}
            isFavourite={true}
            setFavourites={setFavourites}
          />
        ))}

      {favourites && favourites.length === 0 && <div>Deliveroo Me Please</div>}
    </div>
  );
};
