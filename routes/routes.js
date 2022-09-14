'use strict'

var express = require('express');
var router = express.Router();

router.post('/', (req, res) => { return res.json({method: 'post'}) });
router.get('/', (req, res) => { return res.json({method: 'get'}) });

module.exports = router;