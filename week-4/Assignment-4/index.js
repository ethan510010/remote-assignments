const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.js')

app.set('view engine', 'pug')

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('連線成功')
})