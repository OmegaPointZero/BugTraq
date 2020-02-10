const express = require('express')
const router = express.Router()
const PRs = require('../models/pr')
const Bugs = require('../models/bugs')
const initData = require('../models/initd')

router.get('/', (req,res) => {
    res.send({messageResponse:"Bugs live here!"})
})    

router.get('/open', (req,res) => {
    Bugs.find({status:"OPEN"},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('openbugs.ejs', {bugs:bugs})
    })
})    

router.get('/mine', (req,res) => {
    Bugs.find({assignedTo:req.user.employeeID},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('mybugs.ejs', {bugs:bugs})
    })
})    

router.get('/bugs/bug/:id', (req,res) => {
    Bugs.find({bugID:req.params.id},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('openbugs.ejs', {bugs:bugs})
    })

})    

module.exports = router;
