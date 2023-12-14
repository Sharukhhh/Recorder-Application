import React from 'react';
import TopBar from '../Components/TopBar';

const HomeScreen = () => {
  return (
    <>
        <TopBar/>

        <div className="flex mt-10">
        {/* Left Section */}
        <div className="w-1/2 p-8 bg-gray-200 rounded-md ml-4">
          <h2 className="text-2xl font-bold mb-4">Connect</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* User Card */}
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full overflow-hidden">
                {/* User Profile Image */}
                <img
                  src="profile-image.jpg" // Add the path to the user's profile image
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                {/* User Name */}
                <h3 className="text-lg font-semibold">User Name</h3>
                {/* User Email */}
                <p className="text-gray-600">user@example.com</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Button 1
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Button 2
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        {/* <div className="w-1/2 p-8 ml-4 rounded-md bg-gray-300">

        </div> */}
      </div>
    </>
  )
}

export default HomeScreen