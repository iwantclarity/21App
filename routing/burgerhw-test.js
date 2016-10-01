var orm = require('../config/orm.js');

var allUsers = {
	SelectAll: function (cb) {
		orm.all('#SQL-BLUE', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.insertOne('#SQL-BLUE', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.updateOne('#SQL-BLUE', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = allUsers;
