const express = require('express');
const router = express.Router();
const { getUserInfo, insertUserInfo, getSpecifiedUserByEmail, searchUser } = require('../controllers/users')

router.get('/home', (req, res, next) => {
    res.render('login')
});

router.post('/home/signUp', (req, res, next) => {
    let reqEmail = req.body.email;
    let reqPassword = req.body.password;
    getSpecifiedUserByEmail(reqEmail)
    .then(users => {
        if (users.length !== 0) {
            console.log("已有該用戶")
        } else {
            return insertUserInfo(reqEmail, reqPassword);
        }
    })
    .then(insertResponse => {
        console.log("插入資料結果", insertResponse);
        if (insertResponse) {
            res.cookie("userEmail", reqEmail)
            res.redirect('userinfo')    
        } else {
            res.redirect('signuperror')
        }
    })
})

router.post('/home/signIn', (req, res, next) => {
    let reqEmail = req.body.email;
    let reqPassword = req.body.password;
    searchUser(reqEmail, reqPassword)
    .then((searchResult) => {
        if (searchResult.length === 0) {
            res.redirect('signinerror')
        } else {
            res.cookie("userEmail", reqEmail)
            res.redirect('userinfo')
        }
    })
})

router.get('/home/userinfo', (req, res, next) => {
    console.log("重導向到member")
    res.render('member', {
        email: req.cookies.userEmail
    })
})

router.get('/home/signuperror', (req, res, next) => {
    res.render('loginError', {
        error_message: "此email已有人用"
    })
})

router.get('/home/signinerror', (req, res, next) => {
    res.render('loginError', {
        error_message: "此用戶不存在"
    })
})

module.exports = router;