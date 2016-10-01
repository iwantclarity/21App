'use strict';
module.exports = function(sequelize, DataTypes) {
  var Habbit = sequelize.define('Habbit', {
    habbitId: DataTypes.INTEGER,
    habbit: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Habbit;
};