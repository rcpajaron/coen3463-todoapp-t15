import React, {PropTypes} from 'react';
import '../components/App.css';
import TodoList from '../components/todologic/TodoList.js';
import SearchBox from '../components/todologic/SearchBox';
import ServiceSelector from '../components/todologic/ServiceSelector';
import Counter from '../components/todologic/Counter';
import Loading from './loading';

const services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];
const libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];

function Todo(props,context){
    // return(
    //     <div className="App-section">
                
    //             {props.isLoading? 
                
    //             <Loading text="Please Wait" speed={300}/>
    //             :
    //             <div>
    //             <p>{props.name}</p>
    //             <p>{props.email}</p>
    //             <div className="App-section">
    //                 <TodoList />
    //             </div>
    //             <div className="App-section">
    //                 <Counter />
    //             </div>
    //             <div className="App-section">
    //             <SearchBox items={libraries} />
    //             </div>
    //             <div className="App-section">
    //               <ServiceSelector items={services} />
    //             </div>
    //             <div className="App-section">
    //               <ServiceSelector items={services} />
    //             </div>
    //             <br/>
    //             <button onClick={props.handlelogout} value="Logout">Logout</button>
    //             </div>
    //             }
    //     </div>
    // );
    return(
        <div className="App-section">
                
                {props.isLoading? 
                
                <Loading text="Please Wait" speed={300}/>
                :
                <div>
                <p>{props.name}</p>
                <p>{props.email}</p>
                <div className="App-section">
                    <TodoList />
                </div>
                <br/>
                <button onClick={props.handlelogout} value="Logout">Logout</button>
                </div>
                }
        </div>
    );
}

Todo.PropTypes = {
    onLogout: PropTypes.func.isRequired,
    
}
export default Todo;
