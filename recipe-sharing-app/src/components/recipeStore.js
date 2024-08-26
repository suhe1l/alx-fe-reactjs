import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe]
  })),
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return { 
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  updateRecipe: (id, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  setSearchTerm: (term) => set((state) => {
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  }),
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes })
}));

export default useRecipeStore;
