const express = require('express')
const router = express.Router()
    
router.get('/', (req,res) => {
    res.send({messageResponse:"This is where the user login/logout handler lives\nThis file will need to have passport working with it"})
})    

module.exports = router;
