import React, { useState } from 'react';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const APP_ID = "7d88db8d";
    const APP_KEY = "b84ddc1628c93658cd4d8f5466f56706";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      fetchRecipes(query);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          <ion-icon name="search"></ion-icon>
        </button>
      </form>
      <div className="search-result">
        {recipes.map((item, index) => (
          <div key={index} className="item">
            <img src={item.recipe.image} alt={item.recipe.label} />
            <div className="flex-container">
              <h2 className="title">{item.recipe.label}</h2>
              <a
                className="view-btn"
                href={item.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Recipe
              </a>
            </div>
            <p className="item-data">Calories: {item.recipe.calories.toFixed(2)}</p>
            <p className="item-data">Diet label: {item.recipe.dietLabels.length > 0 ? item.recipe.dietLabels.join(', ') : 'No Data Found'}</p>
            <p className="item-data">Health labels: {item.recipe.healthLabels.length > 0 ? item.recipe.healthLabels.join(', ') : 'No Data Found'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
