import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">500</h1>
        <p className="text-2xl mt-4">Internal Server Error</p>
        <p className="mt-2">Sorry, something went wrong on our end.</p>
        <Link href="/" className="btn btn-error mt-6">Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
