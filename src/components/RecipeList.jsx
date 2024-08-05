import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes, onRecipeClick, onAddToFavorites }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white border border-gray-200 rounded-md shadow-md overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.readyInMinutes} minutes</p>
            <div className="flex justify-between items-center mt-2">
              <Link
                to={`/recipes/${recipe.id}`}
                className="text-indigo-600 hover:underline"
              >
                View Recipe
              </Link>
              <button
                onClick={() => onAddToFavorites(recipe)}
                className="text-red-600 hover:underline"
              >
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
