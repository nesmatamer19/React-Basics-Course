import React from 'react'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'  
import Navbar from '../components/navbar'

const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>   
    </div>
  )
}

export default Main
