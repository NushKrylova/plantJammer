import React from "react";
import { RecipeOverview } from "./features/recipeOverview/RecipeOverview";
import { ButtonNavigation } from "./app/components/buttonNavigation/ButtonNavigation";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <header>NavigationSteps</header>
      <div className={styles.recipeOverviewContainer}>
        <RecipeOverview />
      </div>
      <footer>
        <ButtonNavigation
          onClickBack={() => {}}
          onClickNext={() => {}}
        ></ButtonNavigation>
      </footer>
    </div>
  );
}

export default App;
