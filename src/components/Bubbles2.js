import { useState } from 'react';
import '../styles/Bubbles.css'
import { FaArrowLeft } from "react-icons/fa";
var arr=["yellow","blue","red","green"]
const Bubbles2=()=>{
    const[selectedCircle,setSelectedCircle]=useState([]);
   function handleHit(index){
      setSelectedCircle([...selectedCircle,index]);
      console.log(selectedCircle);
   }
    return(
        <>
        <div className='container'>
           {
            arr.map((color,i)=>(
                <div className={selectedCircle?.includes(i)?"active":"hit"} 
                key={i}
                onClick={()=>handleHit(i)}
                >
                <div className="circle" style={{backgroundColor:selectedCircle?.includes(i)?"grey":color}}></div>
                <FaArrowLeft/>
            </div>
            ))
           }
        </div>
        <button onClick={()=>setSelectedCircle([])}>Reset</button>
        </>
    )
}
export default Bubbles2;
// to select multiple bubbles u need to keep track of the selected bubbles