import React, {Component} from 'react';
import AuthApi from '../api/AuthApi';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class Register extends Component {
  constructor(props) {
  super(props);
    this.state={
      username: "",
      error: "",
      emailerror:"",
      isLoading: false
    }
    this.onRegister = this.onRegister.bind(this)
    this.onEmail = this.onEmail.bind(this)
  }

  onEmail(e){
    var regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(this.refs.email.value,) ===false){
        this.setState({
          emailerror: "Invalid Email"
        })
    }else{
        this.setState({
          emailerror: "Email is OK!"
        })
        
    }
  }

  onRegister(e){
        e.preventDefault();
        if(this.refs.password.value>6){
            alert("Your password must be at least 6 characters long. Please try another.");
            return;
        }
        let data={
            username: this.refs.username.value,
            password: this.refs.password.value,
            first_name: this.refs.first_name.value,
            last_name: this.refs.last_name.value,
            email: this.refs.email.value,
        }
        AuthApi.onRegister(data).then((res)=>{
            console.log(res.data); //access data here //check the console
            const data = res.data;
            if(data.success){
              this.setState({  
                user: data.response._id,
                username: data.response.username,
              });
              this.context.router.push('/todo');
              console.log(data);
              return;
            }else{
              this.setState({
                error: data.response.message
              });
              console.log(data);
              console.log("Register Failed!");
            }
        }).catch((err)=>{
          console.log(err);
        });
  }

  render() {
    return (
      <Form>
          <p>{this.state.emailerror}</p>
          <p>{this.state.error}</p>
        <Form.Field>
          <label>Username</label>
          <input type="text" placeholder="" ref="username" required={true}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="" ref="password" required={true}/>
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input type="password" placeholder="" ref="first_name" required={true}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input type="password" placeholder="" ref="last_name" required={true}/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="password" placeholder="" ref="email" onKeyPress={this.onEmail} required={true}/>
        </Form.Field>
        <Button onClick={this.onRegister} value="Register">Register</Button>
      </Form>
    )
  }
}

Register.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Register;
