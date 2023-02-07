import { Recipe } from "./Recipe";

export const Recipes = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => {
        return <Recipe recipe={recipe} />;
      })}
    </div>
  );
};
