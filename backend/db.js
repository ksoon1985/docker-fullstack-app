// mysql 모듈을 불러옴
var mysql = require("mysql");

/*
    Host, user name, password, db name 을 명시해서
    Pool을 생성해줌 
    그리고 다른 곳에서 사용할 수 있게 export함.
*/
var pool = mysql.createPool({
    connectionLimit : 10,
    host: "mysql",
    user: "root",
    password: "ksoon1985",
    database: "myapp",
});

exports.pool = pool;