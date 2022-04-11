import React from "react";
import { useCouter } from "../../hooks/useCouter";
import "./Counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCouter(200);

  return (
    <>
      <h1> Counter With Custom Hook {state}</h1>
      <hr />
      <button onClick={() => increment(2)} className="btn btn-primary">
        
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        
        reset
      </button>
      <button onClick={() => decrement(2)} className="btn btn-warning">
        -1
      </button>
    </>
  );
};
