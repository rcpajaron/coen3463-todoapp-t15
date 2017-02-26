import React, {Component} from 'react';

class Register extends Component {
  constructor(props) {
  super(props);
    this.state={
      count: 0,

    }
    this.register = this.register.bind(this)
  }

  
  register(){
        const quoteApi = '/auth/register';
        var body = {username: this.refs.username.value,
                    password: this.refs.password.value,
                    first_name: this.refs.first_name.value,
                    last_name: this.refs.last_name.value,
                    email: this.refs.email.value,
                    }
        // call api, make sure to include api key in headers
        fetch(quoteApi, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        }).then((response) => {
            console.log(response)
          // decode response to json
          response.json().then((data) => {
            // set state based on decoded data
            console.log(data.u.username)
            this.setState({
              username:data.u.username
            });
          })
        })
  }


  render() {
    return (
      <div className="counter">
        
          <label>username</label>
          <input type="text" placeholder="" ref="username">
          </input>
          <br/>
          <label>password</label>
          <input type="password" placeholder="" ref="password"> 
          </input>
          <br/>
          <label>First name</label>
          <input type="text" placeholder="" ref="first_name"> 
          </input>
          <br/>
          <label>Last name</label>
          <input type="text" placeholder="" ref="last_name"> 
          </input>
          <br/>
          <label>Email</label>
          <input type="text" placeholder="" ref="email"> 
          </input>
          <br/>
          <button onClick={this.register} value="Register">Register</button>
        

      </div>
    )
  }
}
export default Register;
