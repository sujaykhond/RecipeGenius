import React from 'react';
import { useSelector } from 'react-redux';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.recipes.favorites);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">You have no favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 border border-gray-200 rounded-md shadow-md"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
