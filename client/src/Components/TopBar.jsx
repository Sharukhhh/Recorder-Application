import React from 'react';

const TopBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          RECORDER
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-white">
            Welcome, John Doe
          </div>

          <button className="bg-white text-blue-500 px-2 py-2 rounded-full hover:bg-blue-100 focus:outline-none focus:shadow-outline-blue">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
