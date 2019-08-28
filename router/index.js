const express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', { title: '首页' });
});

module.exports = router;
