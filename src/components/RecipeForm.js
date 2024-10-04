import React, { useState, useEffect } from 'react';

function RecipeForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    cookingTime: '',
    image: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        ingredients: initialData.ingredients.join(', '),
        instructions: initialData.instructions.join('\n')
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      ingredients: formData.ingredients.split(',').map(item => item.trim()),
      instructions: formData.instructions.split('\n').filter(item => item.trim() !== '')
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="ingredients" className="form-label">Ingredients (comma-separated)</label>
        <input type="text" className="form-control" id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="instructions" className="form-label">Instructions (one per line)</label>
        <textarea className="form-control" id="instructions" name="instructions" value={formData.instructions} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="cookingTime" className="form-label">Cooking Time (minutes)</label>
        <input type="number" className="form-control" id="cookingTime" name="cookingTime" value={formData.cookingTime} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image URL</label>
        <input type="url" className="form-control" id="image" name="image" value={formData.image} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-success">{initialData ? 'Update Recipe' : 'Add Recipe'}</button>
    </form>
  );
}

export default RecipeForm;