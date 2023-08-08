import React, { useState } from "react";
import '../styles/CheckList.css'
var items=["apple","banana","grapes","litchi","dragon fruit"]
const CheckList=()=>{
    const [arr,setArr]=useState([])
    function handleChange(e,item){
       console.log(item)
       console.log(e.target.checked);
       if(e.target.checked){
            setArr([...arr,item])
       }
       else{
            let newArr=arr.filter((fruit)=>(fruit!=item))
            setArr(newArr);
       }
    }
    return(
        <div>
            <ul style={{listStyle:"none"}}>
              {
                items.map((item)=>(
                    <li><input type="checkbox" value={item} onChange={(e)=>handleChange(e,item)}/>{item}</li>
                ))
              }
            </ul>
            <ul>
                {
                    arr?.map((item)=>(
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default CheckList;
//If you want to determine whether a checkbox is unchecked,
// you need to check the checked property of the checkbox's
// event target. If it's false, then the checkbox is unchecked.