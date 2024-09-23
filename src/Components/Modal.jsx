import React from 'react'
import '../Styles/Modal.css'
function Modal({CloseModel}) {
  return (
     <>
     <div className="modal">
        <h3>How to play dice game</h3>
        <p>
            <span>Select any number</span>
            <span>Click on dice image</span>
            <span>after click on  dice  if selected number is equal to dice number you will get same point as dice </span>
            <span>if you get wrong guess then  2 point will be dedcuted </span>
        </p>
        <button onClick={CloseModel}>Close</button>
     </div>
     </>
  )
}

export default Modal