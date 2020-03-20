import React, { useState } from "react";
import Recipe from "./recipe";
import { ReciData } from "../App";
import "./recipes.scss";
import { ShowOf } from "react-showof";

export interface AllRecipesProps {
  recipe: ReciData;
}

const AllRecipes = ({ recipe }: AllRecipesProps) => {
  // const [toggle, setToggle] = useState(false);
  // const open = () => setToggle(true);
  // const close = () => setToggle(false);

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div>
      <div>
        <div></div>
      </div>
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
        <div className="recipeBtnContainer">
          <button className="recipeBtn" onClick={toggle}>
            View Detail
          </button>
          <ShowOf
            when={open}
            render={Recipe}
            recipe={recipe}
            close={toggle}
          ></ShowOf>
        </div>
      </div>
    </div>
  );
};

/*
 
  Era o q tinha em vez do ShowOf
{open && (
            <Recipe
              key={recipe.recipe.label}
              recipe={recipe}
              close={toggle}
              show={toggle}
            />
          )} */

export default AllRecipes;
