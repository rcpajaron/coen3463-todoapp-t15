var passport = require('passport');
var User = require('../models/user');
var express = require('express');
var router = express.Router();
var moment = require('moment-timezone');
var TodoList = require('../models/todolist');


router.route('/addtodo')
  .post(function(req, res, next) {
  User.findById(req.body.user, (err, user)=>{
    if(!req.user){
        return res.status(401).json({
            success: false,
            title: 'Unauthorized'
        });
    }
    if(!user || err){
      return res.status(500).json({
        success: false,
        title: 'Error',
        response: err
    });
    }
    console.log("user found");
    console.log(user);
    const todolist = new TodoList({
      name: req.body.username,
      user: req.body.user,
      createDate: moment().tz("Asia/Manila").format('LLL'),
      });
      todolist.save(function(err, todo) {
      if(err){
        console.log(err)
        return res.status(500).json({
        success: false,
        title: 'Error',
        response: err
        });
      }
      user.mytodo.push(todo);
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