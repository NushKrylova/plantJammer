import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import recipeOverviewSlice from "../features/recipeOverview/recipeOverviewSlice";

export const store = configureStore({
  reducer: {
    recipeOverview: recipeOverviewSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
