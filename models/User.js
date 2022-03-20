const { db, DataTypes } = require('../mysql');

const User = db.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      required: true,
    },
  },
  {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'modified',
  }
);

module.exports = User;
