import React from 'react';


const AllStores = () => {
  const stores = [
    { id: 1, name: 'Store One', description: 'A great place for gadgets.', location: 'Main Street', imageUrl: 'store1.jpg' },
    { id: 2, name: 'Store Two', description: 'Best books and stationery.', location: 'Elm Street', imageUrl: 'store2.jpg' },
    { id: 3, name: 'Store Three', description: 'Fashion and accessories for everyone.', location: 'Oak Avenue', imageUrl: 'store3.jpg' },
    // Add more static stores if needed
  ];

  return (
    <div className="all-stores-container">
      <h1>All Stores</h1>
      <div className="stores-grid">
        {stores.map((store) => (
          <div key={store.id} className="store-card">
            
            <h2>{store.name}</h2>
            <p>{store.description}</p>
            <p><strong>Location:</strong> {store.location}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStores;
