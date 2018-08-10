import React from 'react';
import _ from 'lodash';
import { render } from 'react-dom';
import './App.css'




function hideGame() {
  var element = document.getElementById("main-div");
  // element.classList.add("dynamic-style");
}

class TicTacToe extends React.Component {
  constructor() {
    super();
    this.state = {
      nextTurn: "X",
      matrix: [
        [-1, -1, -1], 
        [-1, -1, -1], 
        [-1, -1, -1]
      ],
      isGameOver: false
    };
  }

  click(event) {
    var target = event.target
    var id = target.id.split('-');
    if (this.state.matrix[id[0]][id[1]] !== -1) return;
  
    // target.innerText = nextTurn;
    if (this.state.nextTurn == "X"){
      const newState = _.cloneDeep(this.state);
      newState.nextTurn = "O";
      newState.matrix[id[0]][id[1]] = 1;
      this.setState(newState);
  
      if(this.state.matrix[0][0] === this.state.matrix[1][0] && this.state.matrix[1][0]  === this.state.matrix[2][0] && this.state.matrix[2][0] === 1) {
        return this.this.gameOver();
      } else if (this.state.matrix[0][1] === this.state.matrix[1][1] && this.state.matrix[1][1] === this.state.matrix[2][1] && this.state.matrix[2][1] === 1) {
        return this.gameOver();
      } else if (this.state.matrix[0][2] === this.state.matrix[1][2] && this.state.matrix[1][2] === this.state.matrix[2][2] && this.state.matrix[2][2] === 1) {
        return this.gameOver();
      } 
      
      else if (this.state.matrix[0][0] === this.state.matrix[0][1] && this.state.matrix[0][1] === this.state.matrix[0][2] && this.state.matrix[0][2] === 1) {
        return this.gameOver();
      } else if (this.state.matrix[1][0] === this.state.matrix[1][1] && this.state.matrix[1][1] === this.state.matrix[1][2] && this.state.matrix[1][2] === 1) {
        return this.gameOver();
      } else if (this.state.matrix[2][0] === this.state.matrix[2][1] && this.state.matrix[2][1] === this.state.matrix[2][2] && this.state.matrix[2][2] === 1) {
        return this.gameOver();
      }
  
      else if (this.state.matrix[0][0] === this.state.matrix[1][1] && this.state.matrix[1][1] === this.state.matrix[2][2] && this.state.matrix[2][2] === 1) {
        return this.gameOver();
      }else if (this.state.matrix[0][2] === this.state.matrix[1][1] && this.state.matrix[1][1] === this.state.matrix[2][0] && this.state.matrix[2][0]  === 1) {
        return this.gameOver();
      }
  
    } else {
      const newState = _.cloneDeep(this.state);
      newState.nextTurn = "X";
      newState.matrix[id[0]][id[1]] = 0;
      this.setState(newState);

  
      if (this.state.matrix[0][0] === this.state.matrix[1][0] && this.state.matrix[1][0] === this.state.matrix[2][0] && this.state.matrix[2][0] === 0) {
        return this.gameOver();
      } else if (this.state.matrix[0][1] === this.state.matrix[1][1] && this.state.matrix[1][1] === this.state.matrix[2][1] && this.state.matrix[2][1] === 0) {
        return this.gameOver();
      } else if (this.state.matrix[0][1] === this.state.matrix[1][1] && this.state.matrix[1][1] === this.state.matrix[2][1] && this.state.matrix[2][1] === 0) {
        return this.gameOver();
      } 
      
      else if (this.state.matrix[0][0] === this.state.matrix[0][1] && this.state.matrix[0][1] === this.state.matrix[0][2] && this.state.matrix[0][2] === 0) {
        return this.gameOver();
      } else if (this.state.matrix[1][0] === this.state.matrix[1][1] && this.state.matrix[1][1] === this.state.matrix[1][2] && this.state.matrix[1][2] === 0) {
        return this.gameOver();
      } else if (this.state.matrix[2][0] === this.state.matrix[2][1] && this.state.matrix[2][1] === this.state.matrix[2][2] && this.state.matrix[2][2] === 0) {
        return this.gameOver();
      }
  
      else if (this.state.matrix[0][0] === this.state.matrix[1][1] && this.state.matrix[1][1] === this.state.matrix[2][2] && this.state.matrix[2][2] === 0) {
        return this.gameOver();
      }else if (this.state.matrix[0][2] === this.state.matrix[1][1] && this.state.matrix[1][1] === this.state.matrix[2][0] && this.state.matrix[2][0] === 0) {
        return this.gameOver();
      }
    }
    console.log(this.state.matrix);
  }

  gameOver() {
    this.state.isGameOver = true;
    console.log('game over');
    hideGame();
  }


  render() {
    console.log(this.state.matrix);
    return (
      <div className = "grid-container" id = "main-div" >
        {}
        <div className="grid-item" onClick={this.click.bind(this)} id="0-0">{this.state.matrix[0][0] === -1 ? "" : (this.state.matrix[0][0] === 1 ? "X" : "O")}</div>
        <div className="grid-item" onClick={this.click.bind(this)} id="0-1">{this.state.matrix[0][1] === -1 ? "" : (this.state.matrix[0][1] === 1 ? "X" : "O")}</div>
        <div className="grid-item" onClick={this.click.bind(this)} id="0-2">{this.state.matrix[0][2] === -1 ? "" : (this.state.matrix[0][2] === 1 ? "X" : "O")}</div>

        <div className="grid-item" onClick={this.click.bind(this)} id="1-0">{this.state.matrix[1][0] === -1 ? "" : (this.state.matrix[1][0] === 1 ? "X" : "O")}</div>
        <div className="grid-item" onClick={this.click.bind(this)} id="1-1">{this.state.matrix[1][1] === -1 ? "" : (this.state.matrix[1][1] === 1 ? "X" : "O")}</div>
        <div className="grid-item" onClick={this.click.bind(this)} id="1-2"> {this.state.matrix[1][2] === -1 ? "" : (this.state.matrix[1][2] === 1 ? "X" : "O")} </div>

        <div className="grid-item" onClick={this.click.bind(this)} id="2-0"> {this.state.matrix[2][0] === -1 ? "" : (this.state.matrix[2][0] === 1 ? "X" : "O")}</div>
        <div className="grid-item" onClick={this.click.bind(this)} id="2-1"> {this.state.matrix[2][1] === -1 ? "" : (this.state.matrix[2][1] === 1 ? "X" : "O")}</div>
        <div className="grid-item" onClick={this.click.bind(this)} id="2-2"> {this.state.matrix[2][2] === -1 ? "" : (this.state.matrix[2][2] === 1 ? "X" : "O")}</div>

      </div>
    )
  }
}


function App(){
  return (
    <div>
      <h1>  Крестики- нолики </h1>
      <TicTacToe />
      </div>
    
  )
}
render (<App />, document.getElementById('root'))