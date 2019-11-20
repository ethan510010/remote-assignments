const express = require('express');
const app = express();

const getDataRouter = require('./routes/getData.js')
const trackUserRoouter = require('./routes/user.js');

app.set('view engine', 'pug')

// Assignment1: My First Web Server
app.get('/', (req, res) => {
    res.send("<h1>Hello, My Server!</h1>")
})

// Assignment2: Build Backend API for Front-End
app.use('/getData', getDataRouter)

// Assignment4: HTTP Cookie
app.use(trackUserRoouter(app));

app.listen(3000)