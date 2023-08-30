import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import Login from '../pages/Login';

const PrivateRouter = () => {


  return useSelector((state) => state.yetkiSlice.email) === "osman" ? (<Outlet/>):(<Navigate to="/login"/>)
  // <Login/>
}

export default PrivateRouter
