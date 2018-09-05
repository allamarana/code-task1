import React, { Component } from 'react';
import { render } from "react-dom";
import './App.css';
import { findSquareRoot } from './test.js';

class App extends Component {  
  constructor() {
    super();
    this.state = {
      x: [],
    };

    this.elementA = React.createRef();
    this.elementB = React.createRef();
    this.elementC = React.createRef();
  }

  onClickHandler() {
    const a = +this.elementA.current.value;
    const b = +this.elementB.current.value;
    const c = +this.elementC.current.value;
    const result = findSquareRoot(a, b, c);
    this.setState({
      x: result,
    });
  }

  render() {
    const x = this.state.x;
    return (
    
        <div>
         <form>
           a:<br />
            <input type = "text" ref={this.elementA} /> <br/>
            b:<br />
            <input type = "text" ref={this.elementB} /> <br/>
            c:<br />
            <input type = "text" ref={this.elementC} /> <br />
          </form>
          <button onClick = { this.onClickHandler.bind(this) }>Посчитать!</button>
          <br/>
          {x.length === 0 ? 'Нет корней' : x.length === 1 ? `Корень это ${x[0]}` : `Корни это x1: ${x[0]}, x2: ${x[1]}`}
        </div>
      
    );
  }
}
render (<App />, document.getElementById('root'))
export default App;
