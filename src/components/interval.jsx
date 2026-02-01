import React, { use, useEffect , useState} from 'react'

const Interval = () => {
    const [timer, setTimer] = useState(0);
    // useEffect( () => { 
    //     const increment = () =>{
    //         setTimer(timer + 1);
    //     }
    //    const interval = setInterval(() => {
    //      increment();
    //         // console.log("Interval called");
    //     },1000);
    //     return () => {
    //         clearInterval(interval);
    //         // console.log("Interval cleared");
    //     }
    // },[timer])

    useEffect( () => {  
         const interval = setInterval(() => {
            setTimer( prevTimer => prevTimer + 1);
        },1000);
        return () => {
            clearInterval(interval);
        }
  },[])

  return (
    <div>
      <p>Interval Timer: {timer}</p>
    </div>
  )
}

export default Interval
