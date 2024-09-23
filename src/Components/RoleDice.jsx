import React, { useState } from 'react'
import '../Styles/Role_dice.css'



function RoleDice({setScore,selectednumber,random,SetRandomNumber}) {
     
     
    function randomnumber(){
        if(!selectednumber){
            alert("Please select a number first!")
            return
        }
        let rdn=Math.floor(Math.random()*6)+1;
        SetRandomNumber(rdn)
        console.log(rdn);
        if(selectednumber==rdn){
        setScore((prevscore)=>prevscore+rdn)
        }else{
            setScore((prevscore)=>prevscore-selectednumber)
        }
    }

  return (
    <div className="role_dice">
        <img src={`../../dice_${random}.png`}  onClick={randomnumber}/>
        <p>Dice Number :  {random}</p>
        <p>Click on Dice to roll</p>
        
    </div>
  )
}

export default RoleDice