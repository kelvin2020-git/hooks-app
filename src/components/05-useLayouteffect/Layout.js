import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCouter } from "../../hooks/useCouter";
import "./Layout.css";


export const Layout = () => {
  const { counter, increment } = useCouter(1);
  const {  data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  
  
  const pTag = useRef();
  const [boxsize, setBoxsize] = useState({})

  useLayoutEffect(()=>{
      setBoxsize(pTag.current.getBoundingClientRect());
  },[quote])
  
  //  console.log(author, quote);
  // console.log(data);
  return (
    <div>
      <h1>Layout effects</h1>
    
        <blockquote className="blockquote text-right">
          <p 
          className="mb-0"
          ref={pTag}
          > {quote} </p>

        </blockquote>
  <pre>{JSON.stringify(boxsize,null,3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        
        Siguiente quote
      </button>
    </div>
  );
};
