import React from 'react';
import { render } from 'react-dom';
import "./counter.css"

class Counter extends React.Component {
    constructor() {
        super();
        this.state ={
            time: 3
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            if(this.state.time <= 0){ clearInterval(this.timer); } 
            this.setState ({...this.state, time: this.state.time - 1 })
        }, 1000);

    }

    render (){
        let text;
        let _class;
        if (this.state.time >= 0) {
            text = this.state.time;
            _class = ""
        } else {
            text = "БАМ!"
            _class = "boom"
        }
        return (        
            <div className={`default ${_class}`}>
                {this.state.time >=0 ? this.state.time : "БАМ!" }
            </div>
        )
    }
}
    export default Counter;
