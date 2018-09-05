import React from 'react';
import { render } from 'react-dom';
import './dropdown.css'

class Dropdown extends React.Component {
    constructor(){
        super();
        this.state = { 
            isOpened: false, 
            items: []
        };
        
    }
    addComponent(){
        var comp = {
            text: document.getElementById('newText').value,
            completed: false,
        };
        const newItems = [...this.state.items, comp] 
        this.setState({
            isOpened: true,
            items: newItems,
        });
    }

    clearCompleted(event) {
        this.setState({ 
            isOpened: false,
            items: [],
        });
    }

    onItemClick(index, event) {
        const newCompleted = [...this.state.items];
        newCompleted[index] = { completed: true, text:  newCompleted[index].text }
        this.setState({ 
            isOpened: false,
            items: newCompleted,
        });
    }

    render(){
        console.log('isOpened', this.state.isOpened);
        console.log('items', this.state.items);
        //var dropdownText;
        if (this.state.isOpened){

        }

        return (<div>
            <form> 
                What to do: <br/>
                <input type = 'text' id = 'newText'/>
            </form> <br/>
            <button onClick = {this.addComponent.bind(this)}> Click to add component! </button>
            {this.state.items.map((x, index) => <div onClick={this.onItemClick.bind(this, index)} key={index} className = {x.completed ? "done" : "undone"}>{x.text}</div>) } <br/>
            
            <button onClick = {this.clearCompleted.bind(this)}> Clear all completed items! </button>
            
            </div>)
    }
}

export default Dropdown;