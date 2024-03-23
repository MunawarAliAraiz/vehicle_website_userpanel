import React from 'react';
import { Link } from 'react-router-dom';

const CancelPage = () => {
  return (
    <div style={{marginTop:'150px'}} className="container d-flex justify-content-center align-items-center vh-50">
      <div className="text-center">
        <h1>Payment Failed</h1>
        <p>Your Payment was unsuccessful. Please return to the Homepage.</p>
        <Link to="/" className="btn btn-primary mt-3">Go to Homepage</Link>
      </div>
    </div>
  );
};

export default CancelPage;
