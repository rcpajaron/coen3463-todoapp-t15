import React, {Component} from 'react';
import AuthApi from '../api/AuthApi';

class Register extends Component {
  constructor(props) {
  super(props);
    this.state={
      count: 0,
      username: "",
      error: "",
    }
    this.onRegister = this.onRegister.bind(this)
  }

  
  // register(){
  //       const registerAPI = '/auth/register';
  //       var body = {username: this.refs.username.value,
  //                   password: this.refs.password.value,
  //                   first_name: this.refs.first_name.value,
  //                   last_name: this.refs.last_name.value,
  //                   email: this.refs.email.value,
  //                   }
  //       // call api, make sure to include api key in headers
  //       fetch(registerAPI, {
  //         method: 'POST',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(body)
  //       }).then((response) => {
  //           response.json().then((data) => {
  //           // set state based on decoded data
  //           // console.log(data.error)
  //           this.setState({
  //             username:data.message.username
  //           }).bind(this);
  //         })
  //         // console.log(response)
  //         // decode response to json
  //       }).catch((err)=>{
  //           console.log(err)
  //       });
  // }

  onRegister(e){
        e.preventDefault();
        // let elements = e.target.elements;
        // if(elements[3].value>6){
        //     alert("Your password must be at least 6 characters long. Please try another.");
        //     return;
        // }
        let data={
            username: this.refs.username.value,
            password: this.refs.password.value,
            first_name: this.refs.first_name.value,
            last_name: this.refs.last_name.value,
            email: this.refs.email.value,
        }
        AuthApi.onRegister(data).then((res)=>{
            console.log(res.data); //access data here //check the console
        });
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
          <button onClick={this.onRegister} value="Register">Register</button>
        

      </div>
    )
  }
}
export default Register;
