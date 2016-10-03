'use strict';
module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Session.belongsTo(models.User, {
                   onDelete: "CASCADE",
                   foreignKey: {
                       allowNull: false
                   }
               });
      }
    }
  });
  return Session;
};