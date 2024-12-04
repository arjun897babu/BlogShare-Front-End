import './App.css'
import { Routes as AppRoutes, Route } from 'react-router-dom';
import React from 'react';
const Login = React.lazy(() => import('./pages/Login/Login'))
const SignUp = React.lazy(() => import('./pages/signup/SignUp'))

const App = () => {
  return (
    <AppRoutes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </AppRoutes>
  );
};

export default App;
