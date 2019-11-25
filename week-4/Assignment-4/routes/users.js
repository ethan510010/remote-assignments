const express = require('express');
const router = express.Router();
const { getUserInfo, insertUserInfo } = require('../controllers/users')

router.get('/home', (req, res, next) => {
    res.render('login')
});



module.exports = router;