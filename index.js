var sql = require('mysql');
var connection = sql.connection({
    host    :  'localhost',
    user    :  'root',
    password: 'password'
    database: 'my_db'
});
