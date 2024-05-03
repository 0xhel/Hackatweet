var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const User = require('../models/users');
const { checkBody } = require("../modules/checkBody");

router.post("/tweets", async (req, res) => {

    if (!checkBody(req.body, ['tweetContent'])) {
        return res.json({ result: false, error: 'Missing or empty fields' });
    }

    User.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            return res.json({ result: false, error: "User doesn't exist" });
        }

        const newTweet = new Tweet({
            firstname: req.body.firstname,
            username: req.body.username,
            date: req.body.date,
            tweetContent: req.body.tweetContent,
            hashtags: req.body.hashtags,
            like: req.body.like,
        });

        newTweet.save().then(savedTweet => {
            return res.json({ result: true, tweet: savedTweet });
        });
    });
});

module.exports = router;
