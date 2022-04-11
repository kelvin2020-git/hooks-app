import React, { useEffect, useState } from "react";

export const Message = () => {

  const [coords, setCoords] = useState({x:0, y:0})
  const {x, y} = coords;


  useEffect(() => {
    const mouse =(e)=>{
      const coords = { x: e.x, y: e.y};
      setCoords(coords);
    }

window.addEventListener('mousemove', mouse);

  
    return () => {
      window.removeEventListener('mousemove', mouse);
    }
  }, [])
  
  
  
  
  return (
    <div>
      <h3>Eres Genial </h3>
      <p>
        x:{x} y:{y}
      </p>
    </div>
  )
}
