const express = require('express')
const router = express.Router()
const Users = require('../models/user')
    
router.get('/team', isAuthed, (req,res) => {
    Users.find({},function(err,users){
        res.render('tableview.ejs', {user:req.user,passedItems:users,title:"My Team",tableTitle:"Displaying Team Members",tableType:"Team",})
    })
})

router.get('/profile/:id', isAuthed, (req,res) => {
    Users.findOne({"employeeID":req.params.id},function(err,employee){
        res.render('profile.ejs', {user:req.user,employee:employee})
    })
})

router.get('/profile', isAuthed, (req,res) => {
    res.render('profile.ejs', {user:req.user,employee:req.user})
})

router.get('/messages/:id', isAuthed, (req,res) => {
    res.render('message.ejs', {user:req.user,msgID:req.params.id})
})

router.get('/messages', isAuthed, (req,res) => {
    res.render('tableview.ejs', {user:req.user,passedItems:req.user.messages.threads,title:"Threads",tableTitle:"Threads",tableType:"threads"})
})

function isAuthed(req,res,next){
    if(req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = router;
