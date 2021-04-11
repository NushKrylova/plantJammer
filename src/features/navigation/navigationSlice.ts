import { createSlice } from "@reduxjs/toolkit";

interface Navigation {
  currentPageIndex: number;
  pages: string[];
}

const initialState: Navigation = {
  currentPageIndex: 0,
  pages: [
    "Recipe overview",
    "Add & edit substitutes",
    "Validate substitutes",
    "Preview & publish",
  ],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    nextPage(state) {
      if (state.currentPageIndex < state.pages.length - 1) {
        state.currentPageIndex++;
      }
    },
    previousPage(state) {
      if (state.currentPageIndex > 0) {
        state.currentPageIndex--;
      }
    },
  },
});

export const { nextPage, previousPage } = navigationSlice.actions;
export default navigationSlice.reducer;
