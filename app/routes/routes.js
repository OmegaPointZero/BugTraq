const express = require('express')
const router = express.Router()
    
router.get('/', (req,res) => {
    res.render('home.ejs')
});

router.get('/login',(req,res) => {
    console.log(`req.user: ${req.user}`)
    res.send('login.html')
});

router.get('/initialize', (req,res) => {
    var clearCollection = (collection) => {
        return collection.deleteMany({}).exec()
    }

    clearCollection(Users)
    clearCollection(PRs)
    clearCollection(Bugs)
    initData.forEach(function(initd){
        col = initd.collection;
        var target;
        if(initd.db === "Users"){
            target = Users;
        }else if(initd.db === "PRs"){
            target = PRs;
        }else if(initd.db === "Bugs"){
            target = Bugs;
        }
        col.forEach(function(item){
            var T = new target();
            var keys = Object.keys(item)
            keys.forEach(function(key){ 
                T[key] = item[key];
            });
            T.save(function(err){
                if(err){
                    throw(err);
                }
            });
        })
    });
    res.send('Reinitialization successful')

})

module.exports = router;
