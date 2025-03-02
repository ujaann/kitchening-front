import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-peach">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn bg-caribeanCurrent text-white mt-4">Go to Home</Link>
      <Link to="/login" className="btn bg-caribeanCurrent text-white mt-4">Go to Login</Link>
    </div>
  );
};

export default NotFound;
