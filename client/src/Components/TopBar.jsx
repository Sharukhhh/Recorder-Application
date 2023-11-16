import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const TopBar = () => {
  const user = useSelector((state ) => state.auth.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
    toast.success('Logout Successfully');
  }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          RECORDER
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-white">
            {user?.name}
          </div>

          <button onClick={handleLogout} className="bg-white text-blue-500 px-2 py-2 rounded-full hover:bg-blue-100 focus:outline-none focus:shadow-outline-blue">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
