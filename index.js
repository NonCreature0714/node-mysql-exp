var sql = require('mysql');
var connection = sql.createConnection({
    host     :  'localhost',
    user     :  'williambrubaker',
    password :  'password',
    database :  'ace'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
	if (error) throw error;
	console.log('The solution is: ', results[0].solution);
});

connection.end();
