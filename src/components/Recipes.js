import { LikeButton } from "./LikeButton";
import { Recipe } from "./Recipe";

export const Recipes = ({ recipes }) => {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {recipes.map((recipe) => {
        return <Recipe recipe={recipe} />;
      })}
    </div>
  );
};
