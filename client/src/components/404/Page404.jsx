import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4">Page not Found</p>
        <p className="mt-2">The page you were looking for does not exist</p>
        <Link href="/" className="btn btn-error mt-6">Go Home</Link>
      </div>
    </div>
  );
};

export default Page404;