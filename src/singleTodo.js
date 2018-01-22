import React, { Component } from 'react';

class singleTodo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
           <li>{this.prop.todo}<button></button></li>
          // <li>{this.prop.todo}<button onClick = {this.props.delete}>X</button></li>
        );
    }
}

export default singleTodo;
