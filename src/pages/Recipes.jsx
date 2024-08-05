// src/pages/Recipes.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/recipeSlice';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);
  const loading = useSelector((state) => state.recipes.loading);
  const error = useSelector((state) => state.recipes.error);

  useEffect(() => {
    // Fetch recipes when component mounts
    dispatch(fetchRecipes({ ingredients: '', dietary: '', searchQuery: '' }));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-4xl font-bold mb-6">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white border border-gray-200 rounded-md shadow-md overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-600">{recipe.readyInMinutes} minutes</p>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="text-indigo-600 hover:underline mt-2 block"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No recipes available.</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
