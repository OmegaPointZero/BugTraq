const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

var PRSchema = new mongoose.Schema({
    _id: String,
    date: Number, 
    userID: String, 
    PRID: String, 
    bugID: String,
    resolvedIssue: Boolean, 
    notes: String,
    reviewedBy: Object {
        userID: String,
        username: String,
        date: Number,
        notes: String
    },
},{collection:'prs'});

module.exports = mongoose.model('PRs', PRSchema);
