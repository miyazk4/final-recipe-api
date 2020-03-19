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
  const APP_ID = "3181aa2b";
  const APP_KEY = "0ca13a11544dc7dcafa6790a1795fc46";
  const apiUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState<ReciData[]>([]);

  useEffect(() => {
    fetchData(apiUrl);
  }, []);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };
  return (
    <div>
      <Header />
      <main>
        <h1 className="menuTitle">Menu</h1>
        <div className="recipe">
          {recipes.map(recipes => (
            <AllRecipes key={recipes.recipe.label} recipe={recipes} />
          ))}
        </div>
      </main>
    </div>
  );
};

// como estou a mapear aqui se tentar fazer o grid no outro ficheiro n associa

export default App;
