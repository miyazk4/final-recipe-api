import React from "react";
import { ReciData } from "../App";

interface ReciProps {
  recipe: ReciData;
}

const AllRecipes = ({ recipe }: ReciProps) => {
  return (
    <div className="recipeContainer">
      <div>{recipe.recipe.label}</div>
      <div className="imgEing">
        <div>
          {recipe.recipe.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </div>
        <div>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </div>
      </div>
      <div className="notes">
        <div>Calories: {recipe.recipe.calories}</div>
        <div>Servings: {recipe.recipe.yield}</div>
      </div>
    </div>
  );
};

export default AllRecipes;
