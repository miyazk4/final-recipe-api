import React from "react";
import { ReciData } from "../App";
import "./recipes.scss";

interface ReciProps {
  recipe: ReciData;
}

const AllRecipes = ({ recipe }: ReciProps) => {
  return (
    <div className="recipeContainer">
      <div>
        <h1 className="recipeTitle">{recipe.recipe.label}</h1>
      </div>
      <div className="recipeImgNIng">
        <div className="ingredientsContainer">
          <ul className="ingredientsList">
            {recipe.recipe.ingredients.map(ingredient => (
              <li className="ingredientsItem">{ingredient.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className="recipeImage"
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
          />
        </div>
      </div>
      <div className="recipeNotes">
        <div>Calories: {Math.round(recipe.recipe.calories)}</div>
        <div>Servings: {recipe.recipe.yield}</div>
      </div>
      <div>
        <button className="recipeBtn">View Detail</button>
      </div>
    </div>
  );
};

export default AllRecipes;
