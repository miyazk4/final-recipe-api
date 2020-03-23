import React from "react";
import { ShowOfComponentProps } from "react-showof";
import "./recipes.scss";
import { ReciData } from "../App";

export interface RecipeProps {
  recipe: ReciData;
  close: () => void;
}

const Recipe = ({
  recipe,
  close,
  state,
  onTransitionEnd
}: ShowOfComponentProps<RecipeProps>) => {
  return (
    <div
      className={`recipeModalContainer ${state}`}
      onTransitionEnd={onTransitionEnd}
    >
      <div className="recipeModalContent">
        <div className="recipeName">
          <h1>{recipe.recipe.label}</h1>
        </div>
        <div className="recipeIngNImage">
          <ul className="recipeList">
            {recipe.recipe.ingredients.map(ing => (
              <li className="recipeIngredients">{ing.text}</li>
            ))}
          </ul>
          <div className="recipeImageContainer">
            <img
              className="recipeImage"
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
          </div>
        </div>
        <button className="closeBtn" onClick={close}>
          X
        </button>
      </div>
    </div>
  );
};

export default Recipe;
