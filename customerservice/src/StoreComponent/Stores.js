import React from 'react';
import { useNavigate } from 'react-router-dom';


const Stores = () => {
  const navigate = useNavigate();

  const handleViewStoresClick = () => {
    navigate('/all-stores'); 
  };

  return (
    <div className="stores-container">
      <header className="stores-header">
        <h1>Welcome to Our Stores</h1>
        <p>Your one-stop shop for everything you need!</p>
      </header>
      <section className="stores-content">
        <p>Explore our wide range of stores, each offering unique products and services tailored to your needs.</p>
        <button className="view-stores-btn" onClick={handleViewStoresClick}>
          View All Stores
        </button>
      </section>
      <footer className="stores-footer">
        <p>Need help? <a href="/contact">Contact Us</a></p>
      </footer>
    </div>
  );
};

export default Stores;
