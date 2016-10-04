var models = require("./models");
var User = require("./models")["User"];

models.sequelize.sync().then(function () {
	 // Users.create({
	 // 		userEmail: "email@email.com",
  //           userName: "dave",
  //           userPassword: "password",
  //           uId: "123"
  //       });
});
