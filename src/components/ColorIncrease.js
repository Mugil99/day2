import React, { useState } from "react";
import '../styles/ColorIncrease.css'
const ColorIncrease=()=>{
    const[intensity,setIntensity]=useState(0);
    const[obj,setObj]=useState({})
    function handleChange(e){
         console.log(e.target.value);
         setIntensity(parseInt(e.target.value));
         setObj({
            width:"50px",
            height:"50px",
            backgroundColor:`rgb(${intensity},0,0`
         })
         console.log(obj);
    }
    return(
        <div>
          <input 
          id="range"
          type="range" 
          min="0" 
          max="255" 
          onChange={(e)=>handleChange(e)}></input>
          <div style={obj}>
          </div>
        </div>
    )
}
export default ColorIncrease;