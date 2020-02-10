const express = require('express')
const router = express.Router()
const Users = require('../models/user')
    
router.get('/', (req,res) => {
    res.send({messageResponse:"This is where the user stuff lives"})
})    

module.exports = router;
