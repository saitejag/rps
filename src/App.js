import './App.css';
import Rock from './imgs/Rock';
import Paper from './imgs/Paper';
import Scissors from './imgs/Scissors';
import { useState, useEffect } from "react";


function App() {
  const [gameState,setGameState] = useState(0)

  const handleClick = (event) => {
    event.preventDefault()
    console.log(event)
    setGameState(1)
    if (event.target.alt === "Rock") {
      
    }
  }
  

  return (
    <div className="App">
        {
          gameState === 0 && (
            <div>
              <Rock handleClick={handleClick}/>
              <Paper handleClick={handleClick}/>
              <Scissors handleClick={handleClick}/>
              {/* <button onClick={()=>{startGame()}}/> */}
            </div>
          )
        }
        {
          gameState === 1 && <Rock />
        }
        <button onClick={()=>{setGameState(0)}}>Hi</button>
    </div>
  );
}

export default App;
