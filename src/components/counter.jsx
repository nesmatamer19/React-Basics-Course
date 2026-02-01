import React , {useState} from 'react'

const Counter = () => {
    const [state, setState] =
    useState({
        name: "ahmed",
        count: 0
    });

    const increment_by_value = (value) => {
        setState({...state, count: state.count + value})
    }
    const increment = () => {
        setState({...state, count: state.count + 1})
    }
  return (
    <div>
        <h1>Counter App {state.count}</h1>
        <button className="border rounded p-2 mr-2" onClick={() => increment_by_value(5)}> +5 </button>
        <button className="border rounded p-2 bg-blue-300" onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
