'use strict'

var express = require('express');
var router = express.Router();

// Include the routes to express
router.post('/', (req, res) => { return res.json({method: 'post'}) });
router.get('/', (req, res) => { return res.json({method: 'get'}) });

module.exports = router;