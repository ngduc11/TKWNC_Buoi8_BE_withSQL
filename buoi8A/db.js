const mysql = require("mysql");
const config ={
    host: "localhost",
    user: "root",
    password: "123456",
    database: "tkwnc"
};
const conn = mysql.createConnection(config);
conn.connect();

async function query(sql){
    return new Promise(function(resolve, reject){
        conn.query(sql, function(err, rows, fields){
            if(err){
                return reject(err);
            }
            resolve(rows);
        });
    });
}

module.exports = {
    query,
}