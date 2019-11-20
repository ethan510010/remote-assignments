const express = require('express');
const getDataRouter = express.Router();

getDataRouter.get('/', (req, res) => {
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

module.exports = getDataRouter;