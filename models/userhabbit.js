"use strict";

module.exports = function(sequelize, DataTypes) {
   var UserHabbit = sequelize.define('UserHabbit', {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true
       }
   }, {
       underscored: true,
       freezeTableName: true,
       tableName: 'usershabbit',
       classMethods: {
           associate: function(models) {
           }
       }

   });
   return UserHabbit;
};