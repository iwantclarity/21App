'use strict';
module.exports = function(sequelize, DataTypes) {
  var Journey = sequelize.define('Journey', {
    habit: DataTypes.STRING,
    needsHelp: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Journey;
};