import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary'
import PostList from './components/PostList'

const Home = () => {
  return(
    <h1>Home Page</h1>
  )
}

const Profile = () => {
  return(
    <h1>Profile Page</h1>
  )
}
const Shop = () => {
  return <>{undefinedVariable}</>;
}


function App() {
  return (
    <>
      <nav className="p-3">
        <NavLink className="btn btn-primary me-2" to="/" end>Home</NavLink>
        <NavLink className="btn btn-outline-primary me-2" to="/profile">Profile</NavLink>
        <NavLink className="btn btn-outline-primary" to="/shop">Shop</NavLink>
      </nav>

      
      <Routes>
        <Route 
          path='/' 
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          } 
        />

        <Route 
          path='/profile' 
          element={
            <ErrorBoundary>
              <Profile />
            </ErrorBoundary>
          } 
        />

        <Route 
          path='/shop' 
          element={
            <ErrorBoundary>
              <Shop />
            </ErrorBoundary>
          } 
        />
      </Routes>

      <hr />
      <PostList />
    </>
  );
}

export default App
