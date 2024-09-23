import React, { useState } from 'react'
import '../Styles/Playground.css'
import Total_Score from '../Components/Total_Score'
import Buttons  from '../Components/Buttons'
import SelectNumber from '../Components/SelectNumber'
import RoleDice from '../Components/RoleDice'
import Modal from '../Components/Modal'
function Playground() {
  const [score,setScore]=useState(0)
  const [selectednumber,SetSelectedNumber]=useState(null)
  const[random,SetRandomNumber]=useState(1)
  const [showModal,SetShowModal]=useState(false)

  function Rules(){
    SetShowModal(true)
  }

  function CloseModel(){
    SetShowModal(false)
  }
  
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
        <RoleDice Reset={ResetScore}  setScore={setScore} selectednumber={selectednumber} random={random} SetRandomNumber={SetRandomNumber}  />
      </div>
      <div className='btns'>
      <Buttons name="Reset Score" className='reset' onClick={ResetScore}/>
      <Buttons name="Show Rules" className='rules' onClick={Rules} />
      </div>
     
     {showModal ? <Modal CloseModel={CloseModel}/> : ''}
    
    </div>
    </>
  )
}

export default Playground