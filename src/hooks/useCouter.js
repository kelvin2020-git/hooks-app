import { useState } from "react"


//  export const useCouter = (initialState = 10) => {
//  const [state, setState] = useState(initialState)

//  const increment =(factor = 1)=>{
//      setState(state + factor);
//  }
//  const reset = ()=>{
//     setState(initialState);
// }
//  const decrement = (factor = 1)=>{
//      setState(state - factor);
//  }
//  return {
//      state,
//      increment,
//      decrement,
//      reset
//  };
// }


export const useCouter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState)
   
    const increment =()=>{
        setCounter(counter + 1);
    }
    const reset = ()=>{
       setCounter(initialState);
   }
    const decrement = ()=>{
        setCounter(counter - 1);
    }
    return {
        counter,
        increment,
        decrement,
        reset
    };
   }
   