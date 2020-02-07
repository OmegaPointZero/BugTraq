const express = require('express')
const router = express.Router()
    
router.get('/', (req,res) => {
    res.send({messageResponse:"This is where the API lives!"})
})    

module.exports = router;
