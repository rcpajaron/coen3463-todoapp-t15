import React, {PropTypes} from 'react';
import '../components/App.css';
import ToDos from '../components/ToDos.js';
import Loading from './loading';
import TodoApi from '../api/TodoApi';

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

class Todo extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={}
        this.onAddTodo = this.onAddTodo.bind(this);
    }
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
    onAddTodo(e) {
        e.preventDefault();
        var lastState = this.props.items; //get last state of item
        let toDo = { //create a todo object to be saved
            name: this.refs.todo.value,
            user: this.props.user,
            createDate: Date.now(),
        }
        this.setState({ //update items
            items :[...lastState,Object.assign({},toDo)]
        });
        TodoApi.onAddTodo(toDo).then(res=>{
            if(res.data.success){
                this.setState({ //update items
                    items :[...lastState,Object.assign({},res.data.response)]
                });
                toastr.success("Todo added");
                // this.setState({isLoadingItem:false});
                return;
            }
            // this.setState({isLoadingItem:false});
            // toastr.error(res.data.response);
        }).catch(err=>{
            // toastr.error('Ooops! Try again');
            console.log(err);
        }); 
    }
    render(){
    return(
        <div className="App-section">
                
                {this.props.isLoading? 
                
                <Loading text="Please Wait" speed={300}/>
                :
                <div>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <div className="App-section">
                <form onSubmit={this.props.onAddTodo}>
                    <input placeholder="Add a To Do item."/>
                    <button type="submit" size="small">+</button>
                </form>
                </div>
                <div className="App-section">
                    <ToDos />
                </div>
                <br/>
                <button onClick={this.props.onLogOut} value="Logout">Logout</button>
                </div>
                }
        </div>
    )
}
}

Todo.PropTypes = {
    onLogOut: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    
}
export default Todo;
