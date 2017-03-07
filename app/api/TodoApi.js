import axios from 'axios';
var TodoApi = {
    onAddTodo: (toDo)=>{
        return axios.post('/todo/addtodo',toDo)
        .then((res)=>{
            console.log(res);
            console.log("added");
        }).catch((err)=>{
            console.log(err);
        });
    },
    onGetTodo: (id)=>{ //[32312312]
        console.log(id);
        return axios.get('/api/v1/TodoList  ')
            .then((mytodo)=>{
                return mytodo.data.map((todo)=>{
                    if(todo.user===id){
                        return todo;
                    }
                });
            });
    }
}

export default TodoApi;