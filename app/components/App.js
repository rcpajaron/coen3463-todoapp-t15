import React from 'react'
import './App.css';
import TodoList from './TodoList.js';
import Counter from './Counter';

class App extends React.Component{
	
    render(){
        return(
            <div className="App-section">
                <div className="App-header">
                    <p>Hello bebe!</p>
                </div>
                <div className="App-section">
                    <TodoList />
                </div>
                <div className="App-section">
                    <Counter />
                </div>
                
            </div>
        );
    }
}

export default App;