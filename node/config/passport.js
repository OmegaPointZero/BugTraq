const LocalStrategy = require('passport-local').Strategy
const User = require('../app/models/user')
const mongo = require('mongodb').MongoClient;

module.exports = function(passport) {

    passport.serializeUser(function(user, done){
        done(null, user.id)
    })

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err,user)  
        })
    })

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // send entire request to the callback function on next line
    },
        function(req, username, password, done){
            User.findOne({'username':username}, function(err, user){
                if(err)
                    return done(err);

            if(!user){
                var newUser = new User();
                var date = new Date().getTime()
                newUser.username = username;
                newUser.password = newUser.generateHash(password);
                newUser.save(function(err){
                    if(err)
                        throw err;
                    return done(null, newUser);
                    });
                };
            });
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    }, function (req, username, password, done) {
        User.findOne({'email' : username }, function(err,user){
            if(err){
                return done(err);
            }
            if(!user){
                return done(null,false,req.flash('loginMessage','Incorrect Login Credentials'))
            } else if(!user.validPassword(password)){
                return done(null,false,req.flash('loginMessage','Incorrect Login Credentials'))
            } else {  return done(null, user) }
        });
    }));
};
