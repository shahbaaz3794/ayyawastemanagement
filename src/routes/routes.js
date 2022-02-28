import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoutes from './privateRoutes';
import Home from '../pages/home';
import Profile from '../pages/profile';

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;