// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Mock popular recipes
const mockPopularRecipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    image: 'https://images.pexels.com/photos/4518833/pexels-photo-4518833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readyInMinutes: 30,
  },
  {
    id: 2,
    title: 'Chicken Alfredo',
    image: 'https://images.pexels.com/photos/25315522/pexels-photo-25315522/free-photo-of-top-view-of-a-salad-with-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readyInMinutes: 25,
  },
  {
    id: 3,
    title: 'Vegetable Stir-Fry',
    image: 'https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readyInMinutes: 20,
  },
  {
    id: 4,
    title: 'Beef Tacos',
    image: 'https://images.pexels.com/photos/3264572/pexels-photo-3264572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readyInMinutes: 15,
  },
   {
    id: 5,
    title: 'Pancakes',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readyInMinutes: 20,
  },
  {
    id: 6,
    title: 'Salmon Sushi',
    image: 'https://images.pexels.com/photos/3763816/pexels-photo-3763816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readyInMinutes: 40,
  },
];

const Home = () => {
  const popularRecipes = useSelector((state) => state.recipes.popularRecipes) || mockPopularRecipes;

  return (
    <div className="p-8 space-y-12">
      {/* Hero Section with Scrolling Background */}
      <section className="relative bg-cover bg-center py-12 rounded-lg shadow-lg banner-background">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Discover Your Next Favorite Recipe</h1>
          <p className="text-lg mb-6">
            Explore recipes based on the ingredients you have and your dietary preferences. 
            Join our community of food enthusiasts and start cooking today!
          </p>
          <Link to="/recipes" className="bg-white text-indigo-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Explore Recipes
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <div className="flex flex-wrap justify-around gap-8">
          <div className="bg-white p-6 border border-gray-200 rounded-md shadow-md w-full sm:w-1/3">
            <h3 className="text-xl font-semibold mb-2">1. Enter Ingredients</h3>
            <p>Input the ingredients you have on hand, and we'll find recipes that use them.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-md shadow-md w-full sm:w-1/3">
            <h3 className="text-xl font-semibold mb-2">2. Customize Preferences</h3>
            <p>Select dietary preferences to ensure recipes meet your needs.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-md shadow-md w-full sm:w-1/3">
            <h3 className="text-xl font-semibold mb-2">3. Discover Recipes</h3>
            <p>Browse through personalized recipe suggestions and start cooking!</p>
          </div>
        </div>
      </section>

      {/* Popular Recipes */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Popular Recipes</h2>
        {popularRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white border border-gray-200 rounded-md shadow-md overflow-hidden">
                <Link to={`/recipes/${recipe.id}`}>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover rounded-t-md"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                    <p className="text-gray-600">{recipe.readyInMinutes} minutes</p>
                    <p className="text-indigo-600 mt-2 font-medium hover:underline">View Recipe</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No popular recipes available.</p>
        )}
      </section>

      {/* User Testimonials */}
      <section className="bg-gray-100 py-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-8 justify-center">
          <div className="bg-white p-6 border border-gray-200 rounded-md shadow-md w-full sm:w-1/2 lg:w-1/3">
            <p className="text-lg mb-4">"This app has revolutionized how I cook! I love being able to find recipes based on what I have at home."</p>
            <p className="font-semibold">- Parth Yendhe</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-md shadow-md w-full sm:w-1/2 lg:w-1/3">
            <p className="text-lg mb-4">"The dietary preferences feature is fantastic. I can easily find recipes that fit my vegan lifestyle."</p>
            <p className="font-semibold">- Rohit Shinde</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
