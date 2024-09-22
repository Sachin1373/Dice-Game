import React, { useState } from 'react'
import '../Styles/Numbers.css'
function SelectNumber({SetSelectedNumber}) {
    const [number,SetNumber]=useState(0)
    
    function handleclick(value){
        SetNumber(value)
        console.log(value);
        SetSelectedNumber(value)
       
    }
  return (
   <>
   <div className="SelectedNumber">
   <ul className="select">
    {
         [1,2,3,4,5,6].map((value,index)=>(

            <li key={index}  className={`numbers ${number==value ? 'selected' : ''}`} onClick={()=>handleclick(value)}>{value}</li>
        ))
    }
   </ul>
   <p>Selected Number</p>
   </div>
   </>
  )
}

export default SelectNumber