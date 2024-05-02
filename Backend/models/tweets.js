const mongoose = require('mongoose');

//Model tweets for comments collection
const tweetSchema = mongoose.Schema({
    username: String,
    firstname: String,
    date: Date,
    content: String,
    hashtags: String,
    like: Number,
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;