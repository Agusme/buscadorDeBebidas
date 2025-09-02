import { create } from "zustand";
import { createRecipesSlice, type RecipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore= create<RecipeSliceType>()(devtools((...a) =>({
    ...createRecipesSlice(...a)
})))