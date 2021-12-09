const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model { }

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'students',
  }
);

module.exports = Student;

