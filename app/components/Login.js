import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
  super(props);
    this.state={
      count: 0,
      username: "",
      error: "",
    }
    this.login = this.login.bind(this)
  }

  
  login(){
        const login = '/auth/login';
        var body = {username: this.refs.username.value,
                    password: this.refs.password.value,
                    
                    }
        // call api, make sure to include api key in headers
        fetch(login, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        }).then((response) => {
          try{
            response.json().then((data) => {
            // set state based on decoded data
            // console.log(data.error)
            this.setState({
              username:data.message.username
            }).bind(this);
          })}
          catch(e){
            console.log('error',e)
            response.json().then((data) => {
            // set state based on decoded data
            
            this.setState({
              username:data.error
            }).bind(this);
          })
          }

          
          // console.log(response)
          // decode response to json
        
        })
  }


  render() {
    return (
      <div className="counter">
          <p>{this.state.username}</p>
          <label>username</label>
          <input type="text" placeholder="" ref="username">
          </input>
          <br/>
          <label>password</label>
          <input type="password" placeholder="" ref="password"> 
          </input>
          <button onClick={this.login} value="Register">Login</button>
        

      </div>
    )
  }
}
export default Login;
