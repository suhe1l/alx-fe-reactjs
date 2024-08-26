import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm } = useRecipeStore((state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm
  }));

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  if (displayRecipes.length === 0) {
    return <p>No recipes found. Try a different search term or add a new recipe.</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
