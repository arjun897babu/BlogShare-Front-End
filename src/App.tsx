import './App.css'
import { Routes as AppRoutes, Route } from 'react-router-dom';
import React from 'react';

const BlogCardList = React.lazy(() => import('./pages/blog/BlogCardList'))
const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/Login/Login'))
const SignUp = React.lazy(() => import('./pages/signup/SignUp'))

const App = () => {
  return (
    <AppRoutes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} >
        <Route path='' element={<BlogCardList />} />
      </Route>
    </AppRoutes>
  );
};

export default App;
