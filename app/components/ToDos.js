import React, {PropTypes} from 'react';
import '../components/App.css';

import Loading from './loading';



const ToDos=(props)=>{

    return (
        <div className="App-section"> 
                <li>
                <p style={{textDecoration:(props.item.isCompleted?'line-through':'none')}}>{props.item.name}</p>
                <button onClick={(e)=>{
                                        e.preventDefault()
                                        props.onComplete(props.item, props.index);

                                    }}>/</button>
                
                </li>
        
        </div>

        
    );
}

ToDos.propTypes = {
    item: PropTypes.object.isRequired
    
}
export default ToDos;
