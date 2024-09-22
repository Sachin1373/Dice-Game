import React from 'react'
import '../Styles/Total_Score.css'
function Total_Score({score}) {
  return (
    <>
    <div className="total-score">
        <span className='score'>{score}</span>
        <p className='total'>Total Score</p>
    </div>
   
    </>
  )
}

export default Total_Score