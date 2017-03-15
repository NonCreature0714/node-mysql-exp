var sql = require('mysql');
var connection = sql.connection({
    host     :  'localhost:4050',
    user     :  'root',
    password : 'Pa$$word12',
    database : 'mysql'
});
