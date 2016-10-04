/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
<<<<<<< Updated upstream
    port: 3000,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: '21_db'
});


=======
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: '21_db'
});

>>>>>>> Stashed changes
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
