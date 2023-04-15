import React from "react";
import Vertice from "./Vertice.js";


class Graph extends React.Component {
    render () {
        const i = 0;
        return (<div> 
        <Vertice/> 
        <Vertice id="2"/> 
        <Vertice/> 
        <Vertice/>
        <Vertice id = 'warning'/>
        </div>);
    }
}
function addVertice(props) {
    return (
      <div>
      <Vertice/>
      </div>
    );
}
export default Graph;