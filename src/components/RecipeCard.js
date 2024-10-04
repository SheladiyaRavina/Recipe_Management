import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="card h-100 border-0">
      <img src={recipe.image} className="card-img-top" alt={recipe.title} />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">{recipe.description}</p>
        <p className="card-text"><small className="text-muted">Cooking Time: {recipe.cookingTime} minutes</small></p>
        <Link to={`/recipe/${recipe.id}`} className="btn-orange text-white text-decoration-none p-2 rounded-2">View Recipe</Link>
      </div>
    </div>
  );
}

export default RecipeCard;