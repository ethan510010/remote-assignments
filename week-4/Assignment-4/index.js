const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.js')
const cookieParser = require('cookie-parser');

app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cookieParser())

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('連線成功')
})