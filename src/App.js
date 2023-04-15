import logo from './logo.svg';
import Desc from './Desc.js';
import Graph from "./Graph.js";
import {useState} from "react";
import './App.css';

function App() {
  return (
    <div className="App">
        <Desc/>
        <ScoreState/>
        <br></br>
        <Graph/>
    </div>
  );
}

function ScoreState() {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score+1);
  }

  return (
    <div>
    
    <p>Score: {score}</p>
    <button onClick={updateScore}>
     Update Score
    </button>
    </div>
    );
}



export default App;
