import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});
    
    const validateForm = () => {
        const errors = {};
        if (!title) errors.title = 'Recipe title id required';
        if (!ingredients || ingredients.split(',').length < 2) errors.ingredients = 'At least two ingredients are required';
        if (!steps) errors.steps = 'Preparation steps are required';
        return errors;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            //logic to handle form submission 
            console.log({ title, ingredients, steps });
            //reset form
            setTitle('');
            setIngredients('');
            setSteps('');
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-slate-100 shadow-lg rounded-lg md:text-xl sm:text-sm">
                <h2 className="text-2xl mb-4">Add New Recipe</h2>

                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">Recipe Title</label>
                    <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full border p-2 rounded"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>

                {/* Ingredients */}
                <div className="mb-4">
                    <label htmlFor="" className="block text-sm font-medium mb-2">Ingredients</label>
                    <textarea 
                    value={ingredients} 
                    onChange={(e) => setIngredients(e.target.value)}
                    className="w-full border p-2 rounded"
                    />
                    {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>   }
                </div>

                {/* Steps */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Preparation Steps</label>
                    <textarea
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    className="w-full border p-2 rounded"
                    />
                    {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
                </div>

                {/* Submit button */}

                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-orange-400">
                    Add Recipe
                </button>
            </form>
        </div>
        
    );
}

export default AddRecipeForm;
