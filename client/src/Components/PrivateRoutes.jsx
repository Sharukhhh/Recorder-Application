import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const user = useSelector((state) => state.auth.userDetails);

  return (
    <>
    {user  ? <Outlet/> : <Navigate to={'/login'}/>}
    </>
  )
}

export default PrivateRoutes