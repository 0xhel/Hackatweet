const mongoose = require('mongoose');

//Model comments for comments collection
const commentSchema = mongoose.Schema({
    firstname: String,
    comment: String,
});

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;