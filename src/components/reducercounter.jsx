import React from 'react'
import { useReducer } from 'react'

const initialValue= { count: 0 };

//action have ===> {type: 'increment', payload:  1}
//payload is optional
const reducer = (state, action) => {
    //reducer takes old state and action
    switch (action.type){
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "DECREMENT":
            return {...state, count: state.count -1}
        case "INCREMENT_BY_VALUE":
            return {...state, count: state.count + action.payload}
        case "RESET":
            return {initialValue}
        default:
            return state;
    }
}

const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    // use reducer the initialal value of the state and the reducer function
    // beyraga3 array fe dispatch w de momken tedelo el type el enta ayzo
  return (
    <>
    <div>ReducerCounter {state.count}</div>
    <button onClick={() => dispatch({ type: "INCREMENT"})}>+</button>
    <button onClick={() => dispatch({ type: "DECREMENT"})}>-</button>
    <button onClick={() => dispatch({ type: "INCREMENT_BY_VALUE", payload: 3})}>+3</button>
    <button onClick={() => dispatch({ type: "RESET"})}>reset</button>
    </>
  )
}

export default ReducerCounter