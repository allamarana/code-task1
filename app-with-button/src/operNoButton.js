import React, { Component } from 'react';
import { render } from 'react-dom';


class Count extends Component {
    constructor(){
      super();
      this.state = {
        result: undefined,
      };
      this.element = React.createRef();


      add(){
        
      }

      ded(){

      }

      mult(){

      }

      divide(){

      }

     pow() {

     }

     render(){
         <div>
             <form>
                 Enter: <br/>
                <input type="text" ref={this.element} /> <br/>
             </form>

         </div>
     }

     export default Count