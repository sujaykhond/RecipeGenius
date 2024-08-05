
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, selectRecipe, addFavorite, fetchRandomRecipe } from './store/recipeSlice';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const dispatch = useDispatch();
  const { list: recipes, randomRecipe, loading } = useSelector((state) => state.recipes);
  const selectedRecipe = useSelector((state) => state.recipes.selectedRecipe);
  const [ingredients, setIngredients] = React.useState('');
  const [dietary, setDietary] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    dispatch(fetchRandomRecipe());
  }, [dispatch]);

  const handleFetchRecipes = () => {
    dispatch(fetchRecipes({ ingredients, dietary, searchQuery }));
  };

  return (
    <Router>
      <div
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="flex-grow container w-25 mx-auto bg-white bg-opacity-50 rounded-lg p-8 shadow-lg mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/recipes"
              element={
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe List</h2>
                  
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Search for recipes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <select
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  >
                    <option value="">Select Dietary Preference</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten free">Gluten-Free</option>
                    <option value="dairy free">Dairy-Free</option>
                  </select>
                  <button 
                    onClick={handleFetchRecipes}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-200"
                  >
                    Get Recipes
                  </button>

                  {loading ? (
                    <LoadingSpinner />
                  ) : (
                    <RecipeList 
                      recipes={recipes}
                      onRecipeClick={(recipe) => dispatch(selectRecipe(recipe))}
                      onAddToFavorites={(recipe) => dispatch(addFavorite(recipe))}
                    />
                  )}

                  {randomRecipe && (
                    <div className="mt-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">Random Recipe of the Day</h2>
                      <div
                        className="bg-white p-4 border border-gray-200 rounded-md shadow-md flex items-center space-x-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => dispatch(selectRecipe(randomRecipe))}
                      >
                        <img 
                          src={randomRecipe.image} 
                          alt={randomRecipe.title} 
                          className="w-24 h-24 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold text-gray-800">{randomRecipe.title}</h2>
                          <p className="mt-1 text-gray-600">{randomRecipe.readyInMinutes} minutes</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
            />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>

          <AnimatePresence>
            {selectedRecipe && (
              <RecipeDetails
                recipe={selectedRecipe}
                onClose={() => dispatch(selectRecipe(null))}
              />
            )}
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
