var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const { checkBody } = require("../modules/checkBody");

router.post("/tweets", (req, res) => {
    if (!checkBody(req.body, ['tweetContent'])) {
        return res.json({ result: false, error: 'Missing or empty fields' });
    }

    const newTweet = new Tweet({
        tweetContent: req.body.tweetContent
    });

    newTweet.save((savedTweet) => {
        if (!savedTweet) {
            return res.json({ result: false, error: 'Error saving tweet' });
        }
        return res.json({ result: true, tweet: savedTweet });
    });
});

module.exports = router;
