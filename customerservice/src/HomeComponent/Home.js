import React from 'react';
function Home() {
  return (
    <div className="container">
      <div className="home-card">
        <h1>Welcome to Customer Service Portal</h1>
        <p>
          Manage customer data easily with our user-friendly interface.
          Update, add, or delete customer information at the click of a button.
        </p>
        {/* <button className="cta-button">Get Started</button> */}
        <a  href="/customers"><button className="cta-button">Get Started</button></a>
      </div>
      <div className="footer">
        © 2024 Customer Service Portal. All rights reserved.
      </div>
    </div>
  );
}

export default Home;
