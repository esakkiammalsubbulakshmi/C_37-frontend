import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBarComponent/NavBar';
import './NavBarComponent/Navbar.css';
import Home from './HomeComponent/Home';
import CustomerApp from './CustomerAppComponent/CustomerApp';
import Stores from './StoreComponent/Stores';
import AllStores from './StoreComponent/AllStores';
import Employees from './EmployeeComponent/Employees';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<CustomerApp />} />
          <Route path="/stores" element={<Stores />} /> 
          <Route path="/all-stores" element={<AllStores />} />
          <Route path="/Employees" element={<Employees />} /> 


        </Routes>
      </div>
    </Router>
  );
}

export default App;
