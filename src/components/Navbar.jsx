import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Home</Link>
        <div>
          <Link to="/recipes" className="mr-4 hover:underline">Recipes</Link>
          <Link to="/favorites" className="hover:underline">Favorites</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
