import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Recipe {
  name: string;
  people: number;
  time: number;
  recipeIngredients: RecipeIngredients[];
  allIngredients: Ingredient[];
}

interface RecipeIngredients {
  name: string;
  unit: string;
  amount: number;
}

interface Ingredient {
  name: string;
  icon: {
    name: string;
    url: string;
  };
  measure: {
    units: [
      {
        perPortion: number;
        name: string;
      }
    ];
  };
}

export const fetchIngredients = createAsyncThunk(
  "recipeOverview/fetchIngredients",
  async () => {
    const response = await fetch(`ingredients.json`);
    return (await response.json()) as Ingredient[];
  }
);

const initialState: Recipe = {
  name: "Pasta in tomato sauce with ham and tempeh",
  people: 1,
  time: 20,
  recipeIngredients: [
    { name: "cheese", unit: "grams", amount: 10 },
    { name: "chili pepper", unit: "ml", amount: 150 },
    { name: "garlic", unit: "Clove", amount: 1 },
    { name: "canned tomato", unit: "ml", amount: 100 },
    { name: "olive oil", unit: "ml", amount: 9 },
    { name: "onion", unit: "pieces", amount: 0.25 },
    { name: "pasta", unit: "grams", amount: 80 },
    { name: "salt", unit: "grams", amount: 1 },
    { name: "smoked paprika", unit: "grams", amount: 1 },
    { name: "tempeh", unit: "grams", amount: 25 },
  ],
  allIngredients: [],
};

const recipeOverviewSlice = createSlice({
  name: "recipeOverview",
  initialState,
  reducers: {
    increment(state, action) {
      const ingredientName = action.payload;

      //state.ingredients[0].amount++;
    },
    decrement(state) {
     // state.ingredients[0].amount--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.allIngredients.push(...action.payload)
    });
  },
});

export const { increment, decrement } = recipeOverviewSlice.actions;
export default recipeOverviewSlice.reducer;
