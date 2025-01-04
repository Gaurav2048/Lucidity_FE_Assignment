import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/admin"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
