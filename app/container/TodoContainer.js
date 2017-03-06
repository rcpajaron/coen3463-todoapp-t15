import React from 'react';
import Todo from '../components/Todo';
import AuthApi from '../api/AuthApi';
import Loading from '../components/loading'

class TodoContainer extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
        	user:'',
            email: '',
            username: '',
            isLoading: true,
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
                        user: res.data.response._id,
                        email: res.data.response.email,
                        username: res.data.response.username,
                        isLoading: false,
                    });
                    //then getowntodos
                    // TodoApi.onGetOwnTodo(res.data.response._id)
                    // .then((todos)=>{
                    //     this.setState({
                    //         items:[...lastItemState,...todos]
                    //     })
                    // });
                }else{
                    this.context.router.push('/');
                
                }
            });
        }
           
    }  
    onLogout(e){
        e.preventDefault();
        AuthApi.onLogout().then((res)=>{
            console.log(res);
            console.log("Logout Success!")
            this.context.router.push('/');  
        }).catch((err)=>{
          console.log(err);
        });
       
    }

    render(){
        console.log("Todo");
        return(
            
            <Todo handlelogout={this.onLogout} name={this.state.username} email={this.state.email} isLoading={this.state.isLoading}/>
        )
    }
}

TodoContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
    
};

export default TodoContainer;