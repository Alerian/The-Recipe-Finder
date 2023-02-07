import { useEffect, useState } from "react";
import axios from "axios";

import { Recipes } from "../components/Recipes";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    if (searchTerm) {
      const fetchData = async () => {
        const { data } = await axios.get(
          "https://api.spoonacular.com/recipes/findByIngredients",
          {
            params: {
              ingredients: searchTerm,
              apiKey: "a533e2307051473fb5f98b82a7dc306d",
            },
          }
        );

        setRecipes(data);
      };

      fetchData();
    }
  }, [searchTerm]);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      {recipes && <Recipes recipes={recipes} />}
    </div>
  );
};
