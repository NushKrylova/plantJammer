import React from "react";
import { RecipeOverview } from "./features/recipeOverview/RecipeOverview";
import "./App.scss";

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
