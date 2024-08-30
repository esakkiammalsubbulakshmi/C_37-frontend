import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerApp = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: ''
  });
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updateCustomerId, setUpdateCustomerId] = useState(null); // Store the customer ID separately

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error.response ? error.response.data : error.message);
    }
  };

  const createCustomer = async () => {
    try {
      await axios.post('http://localhost:8080/customers', formData);
      fetchCustomers();
      clearForm();
    } catch (error) {
      console.error('Error creating customer:', error.response ? error.response.data : error.message);
    }
  };

  const updateCustomer = async () => {
    if (!updateCustomerId) return;  // Use the stored customer ID
    try {
      await axios.put(`http://localhost:8080/customers/${updateCustomerId}`, formData);
      fetchCustomers();
      clearForm();
      setIsUpdateMode(false);
    } catch (error) {
      console.error('Error updating customer:', error.response ? error.response.data : error.message);
    }
  };

  const deleteCustomer = async (customerId) => {
    try {
        const response = await axios.delete(`http://localhost:8080/customers/${customerId}`);
        if (response.status === 200) {
            fetchCustomers();  // Refresh the list after deleting
        } else {
            console.error('Error deleting customer:', response.data);
        }
    } catch (error) {
        console.error('Error deleting customer:', error.response ? error.response.data : error.message);
    }
};


  const handleUpdateClick = (customer) => {
    setFormData({
      name: customer.name,
      email: customer.email,
      phone_number: customer.phone_number,
      address: customer.address
    });
    setIsUpdateMode(true);
    setUpdateCustomerId(customer.customerID);  // Ensure you store the correct customer ID here
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone_number: '',
      address: ''
    });
    setIsUpdateMode(false);
    setUpdateCustomerId(null);  // Clear the stored customer ID
  };

  return (
    <div className="customer-container">
      <h1>Customer Management</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          isUpdateMode ? updateCustomer() : createCustomer();
        }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <button type="submit">{isUpdateMode ? 'Update Customer' : 'Add Customer'}</button>
        {isUpdateMode && <button type="button" onClick={clearForm}>Cancel Update</button>}
      </form>

      <table>
        <thead>
          
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone_number}</td>
              <td>{customer.address}</td>
              <td>
              <a href="#"> <button onClick={() => handleUpdateClick(customer)}>Update</button></a>
                <button onClick={() => deleteCustomer(customer.customerID)} className="delete">
  Delete
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerApp;
