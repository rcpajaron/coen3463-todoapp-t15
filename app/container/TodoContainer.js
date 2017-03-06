import React from 'react';
import Todo from '../components/Todo';
import AuthApi from '../api/AuthApi';

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
        	user:''
        }
    }

    componentDidMount(){
        let lastUserState = this.state.user; //get last state of user
        // let lastItemState = this.setStatee.items; //get last state of items
        if(lastUserState!==''){
            return;	
        }else{
            AuthApi.onGetUser().then((res)=>{
                if(res.data.response){
                    this.setState({
                        user: res.data.response._id
                    });
                    //then getowntodos
                    // TodoApi.onGetOwnTodo(res.data.response._id)
                    // .then((todos)=>{
                    //     this.setState({
                    //         items:[...lastItemState,...todos]
                    //     })
                    // });
                }else{
                    this.props.router.push('/');
                
                }
            });
        }
           
    }  
    onLogout(e){
        e.preventDefault();
        AuthApi.onLogout().then((res)=>{
            console.log(res);
            console.log("Logout Success!")
            // const data = res.data;
            // if(data.success){
            //   this.setState({
            //     user: data.response._id,
            //     username: data.response.username,
            //   });
            window.location = res.data.redirect;  
            //   console.log(data);
            //   return;
            // }else{
            //   this.setState({
            //     error: data.response
            //   });
            //   console.log(data);
            //   console.log("Login Failed!");}
            
            
        }).catch((err)=>{
          console.log(err);
        });
       
    }

    render(){
        console.log("Todo");
        return(
            <Todo handlelogout={this.onLogout}/>
        )
    }
}

export default TodoContainer;