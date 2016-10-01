// ===============================================================================
// LOAD DATA

// ===============================================================================

var currentUser 		= require('../#SQL-BLUE?');
var allUsers	= require('../#SQL-BLUE?');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// ---------------------------------------------------------------------------
	//SQL data for All Users
	app.get('/#SQL-BLUE?(ALLUSERS)', function (req, res) {
		res.json('#SQL-BLUE?');
	});
	//SQL data for current User
	app.get('/#SQL -BLUE?(USER)', function (req, res) {
		res.json('#SQL?- BLUE');
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a SQL object)
	// ...the table data is pushed to the appropriate Javascript array
	// (ex. User updates goals on day... this data is then sent to the server...
	// Then the server saves the data to the SQL DB)
	// ---------------------------------------------------------------------------

	app.post('#SQL-BLUE?', function (req, res) {
		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table
		if (tableData.length < 5) {
			tableData.push(req.body);
			res.json(true); // KEY LINE
		} else { // Or false if they don't have a table
			waitListData.push(req.body);
			res.json(false); // KEY LINE
		}
	});

	// // ---------------------------------------------------------------------------
	// // I added this below code so you could clear out the table while working with the functionality.
	// // Don't worry about it!

	// app.post('/api/clear', function () {
	// 	// Empty out the arrays of data
	// 	tableData = [];
	// 	waitListData = [];

	// 	console.log(tableData);
	// });
};
