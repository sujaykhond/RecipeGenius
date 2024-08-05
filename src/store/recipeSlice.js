import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async ({ ingredients, dietary, searchQuery }) => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: {
        apiKey: 'cd66cf4362324e7bbe16493760ea662f', // Replace with your Spoonacular API key
        includeIngredients: ingredients,
        diet: dietary,
        query: searchQuery,
        number: 10,
      },
    });
    return response.data.results;
  }
);

export const fetchRandomRecipe = createAsyncThunk(
  'recipes/fetchRandomRecipe',
  async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random`, {
      params: {
        apiKey: 'YOUR_API_KEY', // Replace with your Spoonacular API key
        number: 1,
      },
    });
    return response.data.recipes[0];
  }
);

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    list: [],
    randomRecipe: null,
    selectedRecipe: null,
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    selectRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRandomRecipe.fulfilled, (state, action) => {
        state.randomRecipe = action.payload;
      });
  },
});

export const { selectRecipe, addFavorite } = recipeSlice.actions;
export default recipeSlice.reducer;
