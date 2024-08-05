import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

//https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=cd66cf4362324e7bbe16493760ea662f
