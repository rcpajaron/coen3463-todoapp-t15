import React, {PropTypes} from 'react';
import '../components/App.css';

import Loading from './loading';



function ToDos(props,context){
    return(
        <div className="App-section">    
                <div className="App-section">
                <p>{props.name}</p>
                </div> 
        </div>
    );
}

// Todo.PropTypes = {
//     onAddTodo: PropTypes.func.isRequired,
    
// }
export default ToDos;
