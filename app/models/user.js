const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
    _id: String,
    date: Number, /*date created*/
    employeeID: String,
    email: String,
    password: String, /* bcrypt hashed password, use sync */
    firstName: String,
    lastName: String,
    submittedPRs: Array, /*array of PRIDs */
    role: String, /* (["Developer", "Project Manager", "Intern"]) */
    assignedBugs: Array, /* Array of bug IDs assigned to user */
    resolvedBugs: Array /* Array of bug IDs resolved by user*/
},{collection:'users'});

// Hashing the password
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// Compare and check if password is correct
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}


module.exports = mongoose.model('User', userSchema);
