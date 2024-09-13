import { useState, useEffect } from "react";
import recipesData from '../data.json'

function HomePage() {
    const [ recipes, setRecipes ] = useState([]);

    useEffect(() => {
        setRecipes(recipesData);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-4">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-lg" />
                        <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
                        <p className="text-gray-600 mt-2">{recipe.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default HomePage;
