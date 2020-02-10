const express = require('express')
const router = express.Router()
const PRs = require('../models/pr')
const Bugs = require('../models/bugs')
const initData = require('../models/initd')

router.get('/', (req,res,next) => {
    next()
})    

router.get('/all', (req,res,next) => {
    Bugs.find({},function(err,bugs){
        res.render('allbugs.ejs', {user:req.user,bugs:bugs})
    })
})    

router.get('/open', (req,res) => {
    Bugs.find({status:"Unassigned"},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('openbugs.ejs', {user:req.user,bugs:bugs})
    })
})    

router.get('/mine', (req,res) => {
    Bugs.find({assignedTo:req.user.employeeID},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('mybugs.ejs', {user:req.user,bugs:bugs})
    })
})    

router.get('/bug/:id', (req,res) => {
    Bugs.find({bugID:req.params.id},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('openbugs.ejs', {user:req.user,bugs:bugs})
    })
})

router.get('/new', (req,res) => {
    res.render('newbug.ejs', {user:req.user})
})

module.exports = router;
