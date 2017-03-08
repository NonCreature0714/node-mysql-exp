var sql = require('mysql');
var connection = sql.connection({
    host     :  'localhost',
    user     :  'root',
    password : 'Pa$$word12',
    database : 'my_db'
});
