import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleclick =() => {
        navigate('/', {state: "comes from the state"});
    }

  return (
    <div>
      <p>This is the About page.</p>
      <button onClick={handleclick} className='rounded border bg-blue-500 p-2'>go to home</button>
    </div>
  )
}

export default About
