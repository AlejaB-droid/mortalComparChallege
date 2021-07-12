import "./index.css";
import React from "react";
import RecipeTitle from "./RecipeTitle";
// TODO: Import IngredientList
import IngredientList from "./IngredientList";
import StepsList from "./StepsList";

function App() {
  // TODO: Add recipe object
  const recipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 4.8,
      reviews: 20,
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: "4 Tbsp butter", prepared: false },
      { name: "1/8 cup heavy cream", prepared: false },
      { name: "Salt", prepared: false },
      { name: "Pepper", prepared: true },
    ],
    steps: [
      { step: "Agregue las patatas cortadas a una olla con agua muy salada." },
      { step: "Lleve la olla a ebullición." },
      { step: "Hierva las patatas hasta que estén tiernas, unos 15-20 minutos." }, 
      { step: "Cuele las patatas." },
      { step: "Vuelva a poner las patatas en la olla." },
      { step: "Agregue mantequilla, nata, sal y pimienta al gusto." },
      { step: "Haga puré las patatas." }, 
      { step: "Vuelva a sazonar y agregue mantequilla y nata al gusto." },
       ],
  };

  return (
    <article>
      <h1>Recipe Manager</h1>
      {/* TODO: Add RecipeTitle component */}
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />

      {/* TODO: Add IngredientList component */}
      <IngredientList ingredients={recipe.ingredients} />

      <StepsList steps={recipe.steps} />
    </article>
  );
}

export default App;
