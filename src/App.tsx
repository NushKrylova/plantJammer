import React from "react";
import "./App.css";
import { RecipeOverview } from "./features/recipeOverview/RecipeOverview";

function App() {
  return (
    <div className="app">
      <header>NavigationSteps</header>
      <div className="recipeOverviewContainer">
        <RecipeOverview />
      </div>
      <footer>NavigationButtons</footer>
    </div>
  );
}

export default App;
