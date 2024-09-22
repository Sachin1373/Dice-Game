import { useState } from 'react'
import Home from './Pages/Home'
import Playground from './Pages/Playground'
function App() {
  const [isGameStarted, SetisGameStarted] = useState(false)
   const GoToPlayGround  = () => {
    SetisGameStarted(true)
   }
  return (
    <>
      {isGameStarted ? <Playground/> : <Home play={GoToPlayGround}/>}
    </>
  )
}

export default App
