import React from 'react';
import { render } from 'react-dom';

class Dropdown extends React.Component {
    constructor(){
        super();
        this.state = { isOpened: false };
        
    }
    toggleState(){
        this.setState({ isOpened: !this.state.isOpened })
    }
    render(){
        console.log('isOpened', this.state.isOpened)
        return <div onClick = {this.toggleState.bind(this)}> Dropdown down down done! </div>
    }
}

export default Dropdown;