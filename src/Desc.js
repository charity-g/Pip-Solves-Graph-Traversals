import {useState} from "react";

function Desc() {
    const [name, setName] = useState("Challenger");
    return (
      <div>
        <h1>Pip Solves: Graph Traversals</h1>
        <div>
        <p id="author">copyright 2023(c) Charity Grey <span></span>
        <a href="https://github.com/charity-g">GitHub</a>
        </p>
        </div>
        <form>
        <label for="name-field">Name: </label>
        <input value={name}></input>
        </form>
      </div>
    );
  }



  export default Desc;
  