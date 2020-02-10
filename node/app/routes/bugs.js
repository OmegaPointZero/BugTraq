const express = require('express')
const router = express.Router()
const PRs = require('../models/pr')
const Bugs = require('../models/bugs')
const initData = require('../models/initd')

router.get('/', (req,res) => {
    res.send({messageResponse:"Bugs live here!"})
})    



module.exports = router;
