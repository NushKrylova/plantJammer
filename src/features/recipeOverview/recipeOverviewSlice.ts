import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Recipe {
  name: string;
  people: number;
  time: number;
  recipeIngredients: RecipeIngredients[];
  allIngredients: Ingredient[];
}

interface RecipeIngredients {
  name: string;
  unit: Unit;
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
        name: Unit;
      }
    ];
  };
}

interface IngredientStep {
  name: string;
  step: number;
}

export type Unit =
  | "ml"
  | "grams"
  | "tbsp"
  | "tsp"
  | "slice"
  | "pieces"
  | "Clove";

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
    incrementIngredient(state, action: PayloadAction<IngredientStep>) {
      const { name, step } = action.payload;
      let ingredient = state.recipeIngredients.find(
        (ingredient) => ingredient.name === name
      );
      if (ingredient) {
        ingredient.amount = ingredient.amount + step;
      }
    },

    decrementIngredient(state, action: PayloadAction<IngredientStep>) {
      const { name, step } = action.payload;
      let ingredient = state.recipeIngredients.find(
        (ingredient) => ingredient.name === name
      );
      if (ingredient && ingredient.amount > 0) {
        ingredient.amount = ingredient.amount - step;
      }
    },

    incrementPeople(state) {
      state.people++;
    },

    decrementPeople(state) {
      state.people--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.allIngredients.push(...action.payload);
    });
  },
});

export const formatUnits = (unit: Unit) => {
  switch (unit) {
    case "grams":
      return "gr";
    case "pieces":
      return "pcs";
    case "Clove":
      return "clv";
    default:
      return unit;
  }
};

export const toUpperCaseFirst = (text: string) =>
  text[0].toUpperCase() + text.substring(1);
  
export const {
  incrementIngredient,
  decrementIngredient,
  incrementPeople,
  decrementPeople,
} = recipeOverviewSlice.actions;
export default recipeOverviewSlice.reducer;
