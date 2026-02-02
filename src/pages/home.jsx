import React, { use } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
  return (
    <div>
      <p>This is the Home page.</p>
      <p>{location.state}</p>
    </div>
  )
}

export default Home
