var User = require('../models/user');
var express = require('express');
var router = express.Router();
var moment = require('moment-timezone');
var Todo = require('../models/todolist');


router.post('/addtodo', (req,res)=>{
    User.findById(req.body.user, (err, user)=>{
        if(!req.user){
            return res.json({
                success: false,
                title: 'Unauthorized'
            });
        }
        if(!user || err){
             return res.json({
                success: false,
                title: 'Error',
                response: 'Error occured'
            });
        }
        console.log("user found");
        console.log(user);
        const todo = new Todo({
            name: req.body.name,
            user: user,
            createDate: req.body.createDate,
        });
        todo.save((err,todo)=>{
            if(err){
                console.log("onerror save");
                console.log(err)
               res.json({
                    success: false,
                    title: 'Error',
                    response: err.errors.name.message
                });
                return; 
            }
            user.todos.push(todo);
            user.save();
            console.log("success");
            res.status(201).json({
                success:true,
                title: 'Success',
                response: todo
            });
        });
    });
});

module.exports = router;