import { useState } from 'react';
import '../styles/Bubbles.css'
import { FaArrowLeft } from "react-icons/fa";
var arr=["yellow","blue","red","green"]
const Bubbles=()=>{
    const[selectedCircle,setSelectedCircle]=useState(null);
   function handleHit(index){
      setSelectedCircle(index);
   }
    return(
        <>
        <div className='container'>
           {
            arr.map((color,i)=>(
                <div className={i===selectedCircle?"active":"hit"} 
                key={i}
                onClick={()=>handleHit(i)}
                >
                <div className="circle" style={{backgroundColor:i===selectedCircle?"grey":color}}></div>
                <FaArrowLeft/>
            </div>
            ))
           }
        </div>
        <button onClick={()=>setSelectedCircle(null)}>Reset</button>
        </>
    )
}
export default Bubbles;
// here we can select only one bubble at a time...