'use strict';
module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define('Characters', {
    routeName: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    age: DataTypes.INTEGER,
    forcePoints: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Characters;
};