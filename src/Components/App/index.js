import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from '../recipes/Recipe';

function App() {

const APP_ID = 'e99d59a9';
const APP_KEY = '32f4b4a536ec7a3f1193a79424388da4'

const [recipes,setRecipes] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
 getRecipes();
}, [search]);




const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits);
};

const updatedSearch  = e => {
  setSearch(e.target.value)
}

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updatedSearch} />
        <button className="search-button" type="submit">Search</button>
    </form>
    {recipes.map(recipe => (
    <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      />
    ))}
    </div>
  );
};

export default App;
