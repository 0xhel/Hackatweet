const mongoose = require('mongoose');

//Model users for users's collection
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    token: String,
});

const User = mongoose.model('users', userSchema);

module.exports = User;