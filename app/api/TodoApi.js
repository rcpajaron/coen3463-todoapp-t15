import axios from 'axios';
var TodoApi = {
    onAddTodo: (toDo)=>{
        return axios.post('/todo/addtodo',toDo)
        .then((res)=>{
            return res;
        }).catch((err)=>{
            throw(err);
        });
    },
    onGetTodo: (id)=>{ //[32312312]
        console.log(id);
        return axios.get('/api/v1/Todo  ')
            .then((mytodo)=>{
                return mytodo.data.filter(todo=>todo.user===id);
            });
    },

    onEdit: (id,field,value)=>{
        console.log(value);
        return axios.patch('/todo/'+id+'/'+field+'/'+value)
            .then(res=>{
                return res;
            }).catch(err=>{
                throw(err);
            });
    },
}

export default TodoApi;