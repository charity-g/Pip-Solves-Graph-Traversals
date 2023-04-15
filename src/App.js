import logo from './logo.svg';
import Desc from './Desc.js';
import Graph from "./Graph.js";
import './App.css';

function App() {
  return (
    <div className="App">
        <Desc/>
        <Score score="2"/>
        <Graph/>
    </div>
  );
}


function Score(props) {
  const val = props.score;
  return (
    <div>
    <p>Score: {val}</p>
    </div>
  ); 
}


export default App;
