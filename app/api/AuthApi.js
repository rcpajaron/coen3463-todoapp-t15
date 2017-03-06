import axios from 'axios';

const AuthApi = { 

    onLogin:(data)=>{
        return axios.post('/auth/login',data)
        .then((res)=>{
            console.log(res);
            return res;
        }).catch((err)=>{
            console.log(err);
            return err; 

        });
    },
    onRegister:(data)=>{
        return axios.post('/auth/register',data)
        .then((res)=>{
            return res;
        }).catch((err)=>{
            return err;
        });
    },
    // onGetUser: (data)=>{
    //     return axios.get('/auth/getUser')
    //         .then((res)=>{
    //             console.log(res);
    //             return res;
    //         }).catch((err)=>{
    //             console.log(err);
    //         });
    // }
}

export default AuthApi;