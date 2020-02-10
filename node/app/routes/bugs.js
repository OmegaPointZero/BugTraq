const express = require('express')
const router = express.Router()
const PRs = require('../models/pr')
const Bugs = require('../models/bugs')
const initData = require('../models/initd')

router.get('/', isAuthed, (req,res,next) => {
    res.redirect('/bugs/all')
})    

router.get('/all', isAuthed, (req,res,next) => {
    Bugs.find({},function(err,bugs){
        res.render('bugs.ejs', {user:req.user,bugs:bugs,title:"All Bugs"})
    })
})

router.get('/unassigned', isAuthed, (req,res) => {
    Bugs.find({status:"Unassigned"},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('bugs.ejs', {user:req.user,bugs:bugs,title:"Unassigned Bugs"})
    })
})    

router.get('/active', isAuthed, (req,res) => {
    Bugs.find({status:"Unassigned"},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('bugs.ejs', {user:req.user,bugs:bugs,title:"Open Bugs"})
    })
})    

router.get('/mine', isAuthed, (req,res) => {
    Bugs.find({assignedTo:req.user.employeeID},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('bugs.ejs', {user:req.user,bugs:bugs,title:"My Bugs"})
    })
})    

router.get('/bug/:id', isAuthed, (req,res) => {
    Bugs.find({bugID:req.params.id},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('openbugs.ejs', {user:req.user,bugs:bugs})
    })
})

router.get('/new', isAuthed, (req,res) => {
    res.render('newbug.ejs', {user:req.user})
})

function isAuthed(req,res,next){
    if(req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = router;
