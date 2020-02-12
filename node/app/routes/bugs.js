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
        res.render('tableview.ejs', {user:req.user,passedItems:bugs,title:"All Bugs",tableTitle:"Displaying Bugs",tableType:"Bug",passedItemsLen:bugs.length})
    })
})

router.get('/unassigned', isAuthed, (req,res) => {
    Bugs.find({status:"Unassigned"},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('tableview.ejs', {user:req.user,passedItems:bugs,title:"Unassigned Bugs",tableTitle:"Displaying Bugs",tableType:"Bug",passedItemsLen:bugs.length})
    })
})     

router.get('/mine', isAuthed, (req,res) => {
    Bugs.find({assignedTo:req.user.employeeID},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('tableview.ejs', {user:req.user,passedItems:bugs,title:"My Bugs",tableTitle:"Displaying Bugs",tableType:"Bug",passedItemsLen:bugs.length})
    })
})    

router.get('/bug/:id', isAuthed, (req,res) => {
    Bugs.find({bugID:req.params.id},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('openbugs.ejs', {user:req.user,passedItems:bugs})
    })
})

router.get('/new', isAuthed, (req,res) => {
    res.render('newbug.ejs', {user:req.user})
})

router.post('/new', isAuthed, (req,res) => {
    var BG = new Bugs()
    BG.repo = req.body.repo
    BG.summary = req.body.summary
    BG.type = req.body.type
    BG.dateFiled = new Date().getTime()
    BG.filedByID = req.user.employeeID
    BG.fliedByName = req.user.firstName
    BG.status = "Unassigned"
    BG.active = true;
    BG.submittedPRs = []
    BG.fixedOn = 0
    BG.finalPR = ""
    BG.bugID = Math.floor(Math.random()*BG.dateFiled).toString(16)
    BG.assignedTo = ""
    BG.assignedName = ""
    BG.project = "Employee Management Suite"
    BG.commit = "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06"
    BG.save(function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/bugs/all')
    })
})

function isAuthed(req,res,next){
    if(req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = router;
