import React from "react";
import { RecipeOverview } from "./features/recipeOverview/RecipeOverview";
import { ButtonNavigation } from "./app/components/buttonNavigation/ButtonNavigation";
import { previousPage, nextPage } from "./features/navigation/navigationSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { EmptyPage } from "./app/components/emptyPage/EmptyPage";

import styles from "./App.module.scss";

function App() {
  const currentPageIndex = useAppSelector(
    (state) => state.navigation.currentPageIndex
  );
  const pagesTotal = useAppSelector((state) => state.navigation.pages.length);
  const dispatch = useAppDispatch();

  function getPage() {
    if (currentPageIndex === 0) {
      return <RecipeOverview />;
    } else {
      return <EmptyPage />;
    }
  }

  return (
    <div className={styles.app}>
      <header>NavigationSteps</header>
      <div className={styles.recipeOverviewContainer}>{getPage()}</div>
      <footer>
        <ButtonNavigation
          onClickBack={() => dispatch(previousPage())}
          onClickNext={() => dispatch(nextPage())}
          disabledBack={currentPageIndex === 0}
          disabledNext={currentPageIndex === pagesTotal - 1}
        ></ButtonNavigation>
      </footer>
    </div>
  );
}

export default App;
