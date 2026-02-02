import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'  
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart';
import ErrorPage from '../pages/error_page';

const router = createBrowserRouter(
  createRoutesFromElements(
    //takes an array of route elements
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shopping-cart" element={<ShoppingCart />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)
function RootLayout() {
  // layout can be sidebars, navbars, footers, etc
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const Main = () => {
  return (
    <RouterProvider router ={router} />
  )
}

export default Main
