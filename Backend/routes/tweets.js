var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const { checkBody } = require("../modules/checkBody");

router.post('/tweet', (req, res) => {
    if (!checkBody(req.body, ['tweet'])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }
})