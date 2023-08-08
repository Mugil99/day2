import React, { useState } from "react";
import '../styles/Highlight.css'
var items=["apple","banana","grapes","litchi","dragon fruit"]

const Highlight=()=>{
    const[selected,setSeleted]=useState([])
    function handleClick(i){
         setSeleted([...selected,i])
    }
    return(
        <div>
           <ul>
            {
                items.map((item,i)=>(
                    <li onClick={()=>handleClick(i)}
                    style={{color:selected.includes(i)?"red":""}}>{item}</li>
                ))
            }
           </ul>
        </div>
    )
}
export default Highlight;