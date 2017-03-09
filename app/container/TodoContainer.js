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
            isUpdating: true,
            isEditing: true,
        }
        this.onLogout = this.onLogout.bind(this);
        this.handleSetStateItem =  this.handleSetStateItem.bind(this);
        this.handleOnComplete = this.handleOnComplete.bind(this);
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
                            items:[...lastItemState,...mytodo],
                            isUpdating: false,
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

    handleSetStateItem(value){
        this.setState({items:value});
    }

    handleOnComplete(todo,index){
        this.setState({isEditing: true});
        let lastItems = this.state.items;
        lastItems[index].completed = !lastItems[index].completed;
        TodoApi.onEdit(todo._id,"isCompleted",!todo.isCompleted)
            .then(res=>{
                if(res.data.success){
                    if(this.props.routeParams.mode==='completed' || this.props.routeParams.mode==='open'){
                        lastItems.splice(index,1);
                    } else {
                        lastItems.splice(index,1,res.data.response);
                    }
                    this.setState({
                        items: [...lastItems],
                        completedCount: todo.isCompleted ? this.state.completedCount - 1 : this.state.completedCount + 1,
                        isEditing: false
                    });
                    // toastr.success('Great! You just completed a todo');
                    return;
                }
                this.setState({isEditing:false});
                // toastr.error(res.data.response);
            }).catch(err=>{
                // toastr.error('Ooops! Try again');
            });;
    }

    render(){
        return(
            <div>
            <Todo onLogOut={this.onLogout} 
                name={this.state.username} 
                email={this.state.email} 
                isLoading={this.state.isLoading}
                user={this.state.user}
                items={this.state.items}
                setStateItem={this.handleSetStateItem}
                todoItems={this.state.items}
                onComplete={this.handleOnComplete}
                onUpdate={this.state.isUpdating}
            />
            </div>
        )
    }
}

TodoContainer.contextTypes = {
    router: React.PropTypes.object.isRequired

};

export default TodoContainer;