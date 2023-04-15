import React from "react";
import Vertice from "./Vertice.js";
import {useState} from "react";


class Graph extends React.Component {

    render () {
        const i = 0;
        return (<div> 
        <Vertice/> 
        <Vertice id="2"/> 
        <Vertice/> 
        <Vertice/> 
        <Vertice/>
        </div>);
    }
}



export default Graph;