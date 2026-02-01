import React, {useEffect, useState} from 'react'
import Interval from './interval';

const Count_effect = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
    // with dependency array => runs on first render and when dependencies array change
    // without dependency array => runs on first render and on every render
    // with empty dependency array => runs only on first render
    console.log("count1 changed");
    // cleanup function before next useEffect call or destroy component
    return () => {
        console.log("cleanup for count1");
    }
    }, [])

  return (
    <div>
        <button onClick={() => setShow(!show)}> Hide the Word</button>
     { show && <div><Interval /></div>}
      <div className='flex flex-col gap-4 '>
      <button className='rounded p-2 border' onClick={() => setCount1(count1 + 1)}>Count1: {count1} </button>
      <button className='rounded p-2 border' onClick={() => setCount2(count2 + 1)}>Count2: {count2} </button>
      </div>
    </div>
  )
}

export default Count_effect
