const { execSQLCommand } = require('../db/mysql')

function getUserInfo(email, password) {
    let sql = `SELECT email, password FROM user WHERE email = '${email}' and password = '${password}';`
    const searchResultPromise = execSQLCommand(sql);
    return searchResultPromise;
}

function insertUserInfo(email, password) {
    let sql = `INSERT INTO user (email, password) VALUES (${email}, ${password});`
    const addUserPromise = execSQLCommand(sql)
    return addUserPromise
}

module.exports = {
    getUserInfo,
    insertUserInfo
}