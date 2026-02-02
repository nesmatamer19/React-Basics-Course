import React from 'react'
import { BrowserRouter , createBrowserRouter, createRoutesFromElements, HashRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'  
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    //takes an array of route elements
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
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
