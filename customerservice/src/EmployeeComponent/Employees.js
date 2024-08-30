import React from 'react';


const Employees = () => {
  const employees = [
    { id: 1, name: 'Wilson', position: 'Store Manager', department: 'Sales', imageUrl: 'employee1.jpg' },
    { id: 2, name: 'James', position: 'Customer Service Representative', department: 'Support', imageUrl: 'employee2.jpg' },
    { id: 3, name: 'Emily', position: 'Marketing Specialist', department: 'Marketing', imageUrl: 'employee3.jpg' },
    // Add more static employees if needed
  ];

  return (
    <div className="employees-container">
      <h1>Our Team</h1>
      <div className="employees-grid">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <h2>{employee.name}</h2>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Department:</strong> {employee.department}</p>
          </div>
        ))}
      </div>
      <footer className="employees-footer">
        <p>Thank you for visiting our team page. We appreciate your support!</p>
      </footer>
    </div>
  );
};

export default Employees;
