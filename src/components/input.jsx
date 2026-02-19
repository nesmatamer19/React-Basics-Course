import React , {useEffect, useRef} from 'react'

const Input = () => {
    const inputref = useRef();
    const intervalref = useRef();
    //adjust any complex animation or any complex calculation to only run when the dependencies change and not on every render

    useEffect(() => {
        inputref.current.focus();
        intervalref.current = setInterval(() => {
            console.log("hello")
        }, 1000)

        return () => clearInterval(intervalref.current);
        //cleanup function is used to clear the interval when the component unmounts and prevent memory leaks and unexpected behavior
    }
    , [])


  return (
    <>
    <div>Input</div>
    <label htmlFor="name">Name</label>
    <input ref={inputref} type="text" id="name" name="name"/>
    <button onClick={()=> clearInterval(intervalref.current)}>stop interval</button>
    </>
  )
}

export default Input