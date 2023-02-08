import { LikeButton } from "./LikeButton";
export const Recipe = ({ recipe, isFavourite, setFavourites }) => {
  return (
    <div className="recipe-card">
      <h5 className="card-title">{recipe.title}</h5>
      <img
        className="card-img-top"
        src={recipe.image}
        alt="Card image cap"
      ></img>
      <span>
        <LikeButton
          recipe={recipe}
          isFavourite={isFavourite}
          setFavourites={setFavourites}
        />
      </span>
    </div>
  );
};
