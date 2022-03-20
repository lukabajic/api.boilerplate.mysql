const { db, DataTypes } = require('../mysql');

const Role = db.define(
  'Role',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    number: {
      type: DataTypes.INTEGER,
      required: true,
      unique: true,
    },
  },
  {
    tableName: 'roles',
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'modified',
  }
);

module.exports = Role;
a