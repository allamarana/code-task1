import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import { addNum, deductNum,multiplyNum, divideNum, powNum } from "./numbersOperations";

function func(a, b) {
  function foo(c, d) {
    console.log(c, d, a);
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      result: undefined,
    };
    this.elementA = React.createRef();
    this.elementB = React.createRef();
  }
 
  onClick(event) {
    const operation = event.target.id;
    const a = +this.elementA.current.value;
    const b = +this.elementB.current.value;
    let result;
    switch(operation) {
      case 'add': result = a + b; break;
      case 'deduct': result = a - b; break;
      case 'mult': result = a * b; break;
      case 'divide': result = a / b; break;
      case 'pow': result = Math.pow(a, b); break;
    }
    this.setState({ result });
  }

  render() {
    const operations = [ 'add', 'deduct', 'mult', 'divide', 'pow'];
    return (
      <div>
        <form> 
          a: <br/>
          <input type="text" ref={this.elementA} /> <br/>
          b: <br/>
          <input type="text" ref={this.elementB} /> <br/>
        </form>
        <br/>
        {operations.map(op => <button onClick = {this.onClick.bind(this)} id ={op}> {op} </button>)}
        <br/>
        result is { this.state.result }

      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
export default App;
