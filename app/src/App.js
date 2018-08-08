import React from 'react';
import { render } from 'react-dom';
import './App.css'


var nextTurn = "X";


function targetChange (event){
  var target = event.target
  if (target.innerText != "") return;
  target.innerText = nextTurn;
  if (nextTurn == "X"){
    nextTurn = "O"
  } else { 
    nextTurn = "X"
  }
}




function Article() {
  const body = <section>body</section>;


  return (
    <div className = "grid-container" >

      <div className = "grid-item" onClick = {targetChange} id = "0-0"> </div>
      <div className = "grid-item" onClick = {targetChange} id = "0-1"> </div>
      <div className = "grid-item" onClick = {targetChange} id = "0-2"> </div>
      <div className = "grid-item" onClick = {targetChange} id = "1-0"> </div>
      <div className = "grid-item" onClick = {targetChange} id = "1-1"> </div>
      <div className = "grid-item" onClick = {targetChange} id = "1-2"> </div>
      <div className = "grid-item" onClick = {targetChange} id = "2-0"> </div>
      <div className = "grid-item" onClick = {targetChange} id = "2-1"> </div>
      <div className = "grid-item" onClick = {targetChange} id = "2-2"> </div>

    </div>
  )
}


function App(){
  return (
    <div>
      <h1>  Крестики- нолики </h1>
      <Article />
      </div>
    
  )
}
render (<App />, document.getElementById('root'))