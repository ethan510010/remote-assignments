const mysql = require('mysql')
const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ethan0909",
    database: "assignment",
})

dbConnection.connect((error) => {
    if (error) {
        throw error;
    } else {
        console.log("mysql connection build")
    }
});

function execSQLCommand(sqlCMD) {
    const promise = new Promise((resolve, reject) => {
        dbConnection.query(sqlCMD, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        })
    });
    return promise;
}

module.exports = {
    execSQLCommand: execSQLCommand
}