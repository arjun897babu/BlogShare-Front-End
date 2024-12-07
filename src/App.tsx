import './App.css'
import { Routes as AppRoutes, Route } from 'react-router-dom';
import React from 'react';

const BlogEditor = React.lazy(() => import('./pages/blog/blog form/BlogEditor'))
const Blog = React.lazy(() => import('./pages/blog/Blog'))

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
        <Route path='' element={<BlogCardList />} /> {/* all blogs */}
        <Route path='/write' element={<BlogEditor />} /> {/* blog editor */}
        <Route path='/blogs/:blogId' element={<Blog />} /> {/* single blog page*/}
        <Route path='/blogs' element={<BlogCardList />} />   {/** blog card list for a single user*/}
      </Route>

    </AppRoutes>
  );
};

export default App;
