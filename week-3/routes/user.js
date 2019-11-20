const express = require('express');
const userRoouter = express.Router();
const cookieParser = require('cookie-parser');

function trackUserRouter(app) {
        // 使用cookieParser中間件
    userRoouter.use(cookieParser());

    userRoouter.get('/trackName', (req, res) => {
        let inputName = req.query.name;
        if (inputName) {
            res.cookie('userName', inputName)
            res.redirect('/myName')
        } else {
            if (req.cookies.userName) {
                res.redirect('/myName')
            } else {
                res.render('input')    
            }
        }
    })

    userRoouter.get('/myName', (req, res) => {
        let username = req.cookies.userName;
        if (username) {
            res.send(req.cookies.userName)
        } else {
            res.redirect('/trackName')
        }
    })

    return userRoouter;
}


module.exports = trackUserRouter;