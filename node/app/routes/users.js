const express = require('express')
const router = express.Router()
const Users = require('../models/user')
    
router.get('/', (req,res) => {
    res.send({messageResponse:"This is where the user stuff lives"})
})    

router.get('/team', (req,res) => {
    Users.find({},function(err,users){
        res.render('team.ejs', {user:req.user,team:users})
    })
})

router.get('/profile/:id', (req,res) => {
    Users.find({"employeeID":req.params.id},function(err,employee){
        res.render('profile.ejs', {user:req.user,employee:employee})
    })
})

router.get('/profile', (req,res) => {
    res.render('myprofile.ejs', {user:req.user})
})

router.get('/messages/:id', (req,res) => {
    res.render('message.ejs', {user:req.user})
})

router.get('/messages', (req,res) => {
    res.render('mymessages.ejs', {user:req.user})
})

module.exports = router;
