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
      <h1>{recipe.recipe.label}</h1>
      <button onClick={close}>Close</button>
    </div>
  );
};

export default Recipe;
