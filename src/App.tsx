import React, { useState, useEffect } from "react";
import AllRecipes from "./components/recipes";
import Header from "./components/header";
import "./App.scss";
import "./components/header.scss";
import "./css-reset.scss";

export interface ReciData {
  recipe: {
    label: string;
    ingredients: Ingredient[];
    image: string;
    calories: number;
    yield: number;
  };
}

interface Ingredient {
  text: string;
  weight?: number | undefined;
}

const App = () => {
  const [recipes, setRecipes] = useState<ReciData[]>([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [loading, setLoading] = useState(true);

  const APP_ID = "3181aa2b";
  const APP_KEY = "0ca13a11544dc7dcafa6790a1795fc46";

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e: any) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  const fetchData = async (url: string) => {
    setLoading(true);
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    setLoading(false);
  };
  return (
    <div>
      <Header />
      <main>
        <form className="searchForm" onSubmit={getSearch}>
          <input
            className="searchBar"
            value={search}
            onChange={handleSearchChange}
          />
          <button className="searchBtn" type="submit">
            Search
          </button>
        </form>
        <h1 className="menuTitle">Menu</h1>
        {loading ? (
          <h1 className="loadingTitle">Loading recipes...</h1>
        ) : (
          <div className="recipe">
            {recipes.map(recipes => (
              <AllRecipes key={recipes.recipe.label} recipe={recipes} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

// como estou a mapear aqui se tentar fazer o grid no outro ficheiro n associa

export default App;
