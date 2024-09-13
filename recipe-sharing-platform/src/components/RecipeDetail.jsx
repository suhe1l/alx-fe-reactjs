import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import recipesData from '../data.json'

function RecipeDetail() {
  const { id } = useParams(); //get the recipeID from URL
  const [recipe, setRecipe] = useState(null);
  
  useEffect(() => {
    const selectedRecipe = recipesData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

    return(
        <div className="container mx-auto p-4 md:text-2xl sm:p-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg"/>
                <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
                <p className="text-gray-700 mt-4">{recipe.summary}</p>

                <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
                <ul className="list-disc list-inside mt-2">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-600">{ingredient}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
                <ol className="list-decimal list-inside mt-2">
                    {recipe.instructions.map((step, index) => (
                        <li key={index} className="text-gray-600">{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default RecipeDetail;