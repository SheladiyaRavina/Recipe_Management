import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Recipe Management</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavCollapse}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes" onClick={handleNavCollapse}>Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-recipe" onClick={handleNavCollapse}>Add Recipe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipe-list" onClick={handleNavCollapse}>Manage Recipes</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;