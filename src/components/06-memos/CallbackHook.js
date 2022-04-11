import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';
export const CallbackHook = () => {
 
 
 const[counter, setCounter ] = useState(10);
//  const increment =()=>{
//      setCounter(counter + 1);
//  }
  
//cambiar en funcion a  c para no tener problema con la dependencia 
// const increment = useCallback(()=>{
// setCounter(counter + 1)
//   },[setCounter]);
const increment = useCallback((num)=>{
    setCounter(c => c + num)
      },[setCounter]);


      useEffect(()=>{

      },[increment])
    return (
    <div>
        <h1>UseCallback Hooks: {counter}</h1>
        <hr/>
        <ShowIncrement increment={increment}/>
    </div>
  )
}

