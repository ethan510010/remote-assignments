const { execSQLCommand } = require('../db/mysql')

function getUsers() {
    let sql = `SELECT email, password FROM user;`
    const searchResultPromise = execSQLCommand(sql);
    return searchResultPromise;
}

function getSpecifiedUserByEmail(email) {
    let sql = `SELECT email, password FROM user WHERE email = '${email}';`
    const searchResult = execSQLCommand(sql);
    return searchResult;
}

function searchUser(email, password) {
    let sql = `SELECT email, password FROM user WHERE email = '${email}' AND password = '${password}';`
    const searchResult = execSQLCommand(sql);
    return searchResult;
}

function insertUserInfo(email, password) {
    let sql = `INSERT INTO user (email, password) VALUES ('${email}', '${password}');`
    const addUserPromise = execSQLCommand(sql)
    return addUserPromise;
}

module.exports = {
    getUserInfo: getUsers,
    insertUserInfo,
    getSpecifiedUserByEmail,
    searchUser
}