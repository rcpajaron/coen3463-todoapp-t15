import React from 'react';
import Todo from '../components/Todo';
import AuthApi from '../api/AuthApi';   
import TodoApi from '../api/TodoApi';
import Loading from '../components/loading'
import ToDos from '../components/ToDos'

class TodoContainer extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
        	user:'',
            email: '',
            username: '',
            isLoading: true,
            items:[],
        }
        this.onLogout = this.onLogout.bind(this);
    }

    

    componentDidMount(){
        let lastUserState = this.state.user; //get last state of user
        let lastItemState = this.state.items; //get last state of items
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
                    TodoApi.onGetTodo(res.data.response._id)
                    .then((mytodo)=>{
                        this.setState({
                            items:[...lastItemState,...mytodo]
                        })
                    });
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
        let displayTodo = [];
        for(let x=0; x<this.state.items.length;x++){
            displayTodo.push(
                <ToDos
                    // key={x}
                    name={this.state.items[x].name}
                />
            );
        }
        return(
            <div>
            <Todo onLogOut={this.onLogout} 
                name={this.state.username} 
                email={this.state.email} 
                isLoading={this.state.isLoading}
                user={this.state.user}
                items={this.state.items}
            />
            {displayTodo}
            </div>
        )
    }
}

TodoContainer.contextTypes = {
    router: React.PropTypes.object.isRequired

};

export default TodoContainer;