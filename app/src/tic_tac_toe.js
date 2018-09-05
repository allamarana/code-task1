import React from 'react';
import _ from 'lodash';
import { render } from 'react-dom';
import './App.css'



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
    if (this.state.isGameOver) return;

    const currentTurn = 'X' === this.state.nextTurn ? 1 : 0;

    const newState = _.cloneDeep(this.state);
    if (this.state.nextTurn == "X"){
      newState.nextTurn = "O";
      newState.matrix[id[0]][id[1]] = 1;
    } else {
      newState.nextTurn = "X";
      newState.matrix[id[0]][id[1]] = 0;
    }
    
    this.setState(function(state) {
      return {
        ...state,
        matrix: newState.matrix,
        nextTurn: newState.nextTurn,
      };
    });
  
    if(newState.matrix[0][0] === currentTurn && newState.matrix[1][0]  === currentTurn && newState.matrix[2][0] === currentTurn) {
      return this.gameOver();
    } 
    if (newState.matrix[0][1] === currentTurn && newState.matrix[1][1] === currentTurn && newState.matrix[2][1] === currentTurn) {
      return this.gameOver();
    }
    if (newState.matrix[0][2] === currentTurn && newState.matrix[1][2] === currentTurn && newState.matrix[2][2] === currentTurn) {
      return this.gameOver();
    } 
    
    if (newState.matrix[0][0] === currentTurn && newState.matrix[0][1] === currentTurn && newState.matrix[0][2] === currentTurn) {
      return this.gameOver();
    }
    if (newState.matrix[1][0] === currentTurn && newState.matrix[1][1] === currentTurn && newState.matrix[1][2] === currentTurn) {
      return this.gameOver();
    }
    if (newState.matrix[2][0] === currentTurn && newState.matrix[2][1] === currentTurn && newState.matrix[2][2] === currentTurn) {
      return this.gameOver();
    }

    if (newState.matrix[0][0] === currentTurn && newState.matrix[1][1] === currentTurn && newState.matrix[2][2] === currentTurn) {
      return this.gameOver();
    }
    if (newState.matrix[0][2] === currentTurn && newState.matrix[1][1] === currentTurn && newState.matrix[2][0]  === currentTurn) {
      return this.gameOver();
    }

    console.log(newState);
  }

  gameOver() {
    this.setState(function(state) {
      return {
        ...state,
        isGameOver: true,
      };
    });
    console.log('game over');
  }


  render() {
    return (
      <div>
        <div className = "grid-container" id = "main-div">
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
        <div className={this.state.isGameOver ? '' : 'hide'}>
          Победили {this.state.nextTurn === 'X' ? 'O' : 'X'}
        </div>
      </div>
    )
  }
}


function App(){
  return (
   <div className="mainDiv">
       <h1>  Крестики- нолики </h1>
      <TicTacToe />
      </div> 

     <div>
       <App />
    </div>
    
  )
}
render (<App />, document.getElementById('root'))