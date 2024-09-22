import React, { useState } from 'react'
import '../Styles/Playground.css'
import Total_Score from '../Components/Total_Score'
import SelectNumber from '../Components/SelectNumber'
import RoleDice from '../Components/RoleDice'
function Playground() {
  const [score,setScore]=useState(0)
  const [selectednumber,SetSelectedNumber]=useState(null)
  const[random,SetRandomNumber]=useState(1)
  
  function ResetScore(){
    setScore(0)
    SetRandomNumber(1)
    SetSelectedNumber(null)
  }
  return (
    <>
    <div className="playground-wrapper">
      <div className="upper-part">
      <div className="score-board">
        <Total_Score score={score}/>
      </div>
      <div className="select-number">
      <SelectNumber SetSelectedNumber={SetSelectedNumber} />
      </div>
      </div>
      <div className="Role">
        <RoleDice Reset={ResetScore}  setScore={setScore} selectednumber={selectednumber} random={random} SetRandomNumber={SetRandomNumber} />
      </div>
    </div>
    </>
  )
}

export default Playground