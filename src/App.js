import React, { Component } from 'react';
import './App.css';
import singleTodo from "./singleTodo";
class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    onInputChange = e => {
        this.setState({ currentTodo: e.target.value });
    }

    onClick = () => {
        let todoCopy = this.state.todos.slice();
        todoCopy.push(this.state.currentTodo);
        this.setState({ todos: todoCopy, currentTodo: "" });
    }

   /* deleteTodo = i => {
        let todoCopy = this.state.todos.slice();
        todoCopy.slice(i,1);
        this.setState({ todos:todoCopy });

    }*/

    render() {
        let bulletTodo = this.state.todos.map((f,i) => {
        return (
            <li key={i}>{f}</li>
           // <singleTodo todo={f} delete={() => this.deleteTodo(i)}/>

        );
    });

    return(    < div >
            <input placeholder="enter todo" value={this.state.currentTodo} onChange={this.onInputChange} />
            <br/>
            <button onClick={this.onClick}>ADD</button>
            {this.state.todos.length === 0 ? "no todos" : <ol>{bulletTodo}</ol>}
        </div>
        );
    }
}

export default App;
