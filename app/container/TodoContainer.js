import React from 'react';
import Todo from '../components/Todo';

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("Todo");
        return(
            <Todo/>
        )
    }
}

export default TodoContainer;