const express = require('express');
const app = express();

// Assignment1: My First Web Server
app.get('/', (req, res) => {
    res.send("<h1>Hello, My Server!</h1>")
})

app.listen(3000)

