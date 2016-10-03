'use strict';
module.exports = function(sequelize, DataTypes) {
  var Habit = sequelize.define('Habit', {
    HabitId: DataTypes.INTEGER,
    Habit: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      Habit.belongsTo(models.User, {
                   onDelete: "CASCADE",
                   foreignKey: {
                       allowNull: false
                   }
               });


       Habit.belongsToMany(models.User, {
                   through: models.UserHabit
               });
      }
    }
  });

  return Habit;
};