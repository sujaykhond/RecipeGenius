import React from 'react';
import { motion } from 'framer-motion';

const RecipeList = ({ recipes, onRecipeClick, onAddToFavorites }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <motion.div
          key={recipe.id}
          className="bg-white p-4 border border-gray-200 rounded-md shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onRecipeClick(recipe)}
        >
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
          <div className="mt-2">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <button
              className="mt-2 bg-indigo-500 text-white px-3 py-1 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                onAddToFavorites(recipe);
              }}
            >
              Add to Favorites
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RecipeList;
