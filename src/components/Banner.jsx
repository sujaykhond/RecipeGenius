// src/components/Banner.jsx

import React from 'react';

const Banner = () => {
  return (
    <div 
      className="relative h-64 bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the RecipeGenius</h1>
        <p className="text-lg md:text-xl mb-4">
          Discover delicious recipes based on ingredients you have and your dietary preferences.
        </p>
        <a 
          href="#recipes"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Banner;
