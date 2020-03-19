import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReciData } from "../App";
import { GET } from "../utils/http";

const APP_ID = "3181aa2b";
const APP_KEY = "0ca13a11544dc7dcafa6790a1795fc46";
const apiUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

const SingleRecipe = () => {
  let { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<ReciData>();
  const fetchData = async (_: string) => {
    const rec = await GET<ReciData>(apiUrl + "/" + id);
    setRecipe(rec);
    console.log(rec);
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);

  console.log(recipe);

  return <div>A retornar</div>;
};

export default SingleRecipe;
