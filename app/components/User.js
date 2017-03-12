import React, {Component,PropTypes} from 'react';
import '../components/App.css';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import { Segment, Button, Divider, Container, Menu, Input } from 'semantic-ui-react'


class User extends Component {
    constructor(props,context) {
      super(props,context);
        this.state={
          activeItem: 'login',
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, { name }){
        this.setState({ activeItem: name })
}

    render(){
    return(
        <Container text>
            <Menu attached='top' tabular>
          <Menu.Item name='login' active={this.state.activeItem === 'login'} onClick={this.handleItemClick}  />
          <Menu.Item name='register' active={this.state.activeItem === 'register'} onClick={this.handleItemClick} />
          
        </Menu>
        {this.state.activeItem === 'login'?
        <Segment attached='bottom'>
          <div className="App-section" >
                    <Login/>   
                    <br/>
                    <button onClick={this.props.switch} value="RegForm">Register</button> 
                </div>
        </Segment>
        :
        <Segment attached='bottom'>
                <div className="App-section" >                  
                    <Register />
                    <br/>
                    <button onClick={this.props.switch} value="LoginForm">Back</button>
                </div>
        </Segment>
        }     
            
            
        </Container>
    );
}
}

User.PropTypes = {
    login: PropTypes.bool.isRequired,
    switch: PropTypes.func.isRequired,
    handleRegister: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
}

export default User;
