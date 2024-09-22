import React from 'react'
import '../Styles/Home.css'
import Button from '../Components/Buttons';
import dices from "../assets/dices.png";
function Home({play}) { 
  return (
    <>
      <div className="home-page">
        <div className="dices">
            <img src={dices} alt="img"  />
        </div>
        <div className="right-side">
            <span className='heading'>DICE GAME</span>
            <Button name="Play Now" className="play-button"   onClick={play} />
        </div>
      </div>
    </>
  )
}

export default Home