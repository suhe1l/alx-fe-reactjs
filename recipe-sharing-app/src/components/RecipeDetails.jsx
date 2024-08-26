import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipe, addFavorite, removeFavorite, favorites } = useRecipeStore(state => ({
    recipe: state.recipes.find(r => r.id === parseInt(id)),
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
    favorites: state.favorites
  }));

  if (!recipe) return <div>Recipe not found</div>;

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
      <Link to="/">Back to recipes</Link>
    </div>
  );
};

export default RecipeDetails;
