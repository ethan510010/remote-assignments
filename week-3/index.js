const express = require('express');
const app = express();

// Assignment1: My First Web Server
app.get('/', (req, res) => {
    res.send("<h1>Hello, My Server!</h1>")
})

// Assignment2: Build Backend API for Front-End
app.get('/getData', (req, res) => {
    let resMessage = ""
    if (req.query.number) {
        if (parseInt(req.query.number)) {
            let validNumber = parseInt(req.query.number)
            let sum = (1 + validNumber) * validNumber / 2
            resMessage = `${sum}`
        } else {
            resMessage = "Wrong Parameter"
        }
    } else {
        resMessage = "Lack of Parameter"
    }
    res.send(resMessage)
})

app.listen(3000)

