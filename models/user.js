'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userPassword: DataTypes.STRING,
    userName: DataTypes.STRING
    // uId: {
    //   type: DataTypes.STRING,
    //   length: 28
    // },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        User.belongsToMany(models.Habit, {
                   through: models.UserHabit
               });
      }
    }
  });
  return User;
};