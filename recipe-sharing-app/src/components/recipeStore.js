import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes
    };
  }),
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return { 
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes
    };
  }),

  updateRecipe: (id, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes
    };
  }),

  setSearchTerm: (term) => set((state) => {
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  }),

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set((state) => {
    //simple recommendation system based on favorites
    const nonFavorites = state.recipes.filter(recipe => !state.favorite.includes(recipe.id));
    const recommendations = nonFavorites.sort(() => 0.5 - Math.random()).slice(0,3);
    return { recommendations };
  })
}));

export default useRecipeStore;
