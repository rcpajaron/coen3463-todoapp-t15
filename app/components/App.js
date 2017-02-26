import React from 'react'
import './App.css';
import TodoList from './TodoList.js';
import SearchBox from './SearchBox';
import ServiceSelector from './ServiceSelector';
import Counter from './Counter';
import Register from './Register'

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

class App extends React.Component{
  constructor(props) {
      super(props);
        this.state={
          username: ""
        }

  }

    render(){
        return(
            <div className="App-section">
                <div className="App-header">
                    {this.state.username ? this.state.username: <p>Hello todo!</p>}
                    
                </div>

                <div className="App-section">
                    <Register />
                </div>
                <div className="App-section">
                    <TodoList />
                </div>
                <div className="App-section">
                    <Counter />
                </div>
                <div className="App-section">
                <SearchBox items={libraries} />
                </div>
                <div className="App-section">
                  <ServiceSelector items={services} />
                </div>
            </div>
        );
    }
}

export default App;