// ===============================================================================
// DEPENDENCIES

// ===============================================================================
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// HTML GET Requests
	// ---------------------------------------------------------------------------
	// ALL USERS
	app.get('/#HB GREY?', function (req, res) {
		res.sendFile(path.join(__dirname + '#HB GREY?'));
	});
	//CURRENT USER
	app.get('/#HB GREY?', function (req, res) {
		res.sendFile(path.join(__dirname + '#HB GREY?'));
	});

	// If no matching route is found default to home-- GREY
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};
