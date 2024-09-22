import React from 'react'
import '../Styles/Buttons.css'
function Buttons({name,className,onClick}) {
  return (
   <>
   <button className={className} onClick={onClick}>{name}</button>
   </>
  )
}

export default Buttons