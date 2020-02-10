const express = require('express')
const router = express.Router()
const Users = require('../models/user')
    
router.get('/team', isAuthed, (req,res) => {
    Users.find({},function(err,users){
        res.render('team.ejs', {user:req.user,team:users})
    })
})

router.get('/profile/:id', isAuthed, (req,res) => {
    Users.find({"employeeID":req.params.id},function(err,employee){
        res.render('profile.ejs', {user:req.user,employee:employee})
    })
})

router.get('/profile', isAuthed, (req,res) => {
    res.render('myprofile.ejs', {user:req.user})
})

router.get('/messages/:id', isAuthed, (req,res) => {
    res.render('message.ejs', {user:req.user})
})

router.get('/messages', isAuthed, (req,res) => {
    res.render('mymessages.ejs', {user:req.user})
})

function isAuthed(req,res,next){
    if(req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = router;
