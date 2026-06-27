import {useState} from 'react'
import './App.css'

const App = () => {
    const [chances,setChances]= useState(0);
   const [name, setName] = useState("");
    const [message,setMessage]=useState("");
    const [reduce,setReduce]=useState(0)
    const [random, setRandom] = useState(() => Math.floor(Math.random() * 100) + 1);

    const selectlevel =(count)=>{
      setChances(count);
      setReduce(count);
      setName("");
      setRandom(Math.floor(Math.random() * 100) + 1);
      setMessage(`You have selected ${count} chances!`)    
    }
    const checkGuess =() =>{
      if (reduce<=0){
        setMessage("No chances left!");
        return;
      }
    
    if (Number(name)===random){
        setMessage("🎉 Correct! Click Play Again to start a new game.");
        setReduce(0);
        return;
    }
    setReduce(prev =>prev-1)
      if (Number(name)>random){
        setMessage("Your guess is too high. Please guess again.");
    }
    else{
        setMessage("Your guess is too low. Please guess again.");
    }
    }
  
  const resetGame = () => {
    setName("");
    setMessage("");
    setChances(0);
    setReduce(0);
    setRandom(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className='all'>
        <h1>Welcome to the Number Guessing Game! </h1>
        <h3>
          I'm thinking of a number between 1 and 100.<br />
          Select a difficulty level to start the game.
        </h3>
        <h5>Please select the difficulty level: <br></br>
        1. Easy (10 chances) <br />
        2. Medium (5 chances) <br />
        3. Hard (2 chances)</h5>

        <div className='btn'>
          <button onClick={()=>selectlevel(10)} >Easy(10)</button>
          <button onClick={()=>selectlevel(5)}>Medium(5)</button>
          <button onClick={()=>selectlevel(2)}>Hard(2)</button>
          </div>
          <h4>Remaining Chances: {reduce}</h4>
            <label>Enter a number to play Game</label>
            <input
              type="text"
              value={name}
              disabled={reduce === 0}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="dwn">
        <button onClick={checkGuess} disabled={reduce === 0}>
          Submit
        </button>
        <h6>{message}</h6>
        <button onClick={resetGame}>Play Again</button>
        
        </div>
      
    </div>
    
  )
}

export default App
