const { Sequelize, DataTypes } = require('sequelize');

const { mysqlDB } = require('./config');

const sequelize = new Sequelize(mysqlDB);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = { db: sequelize, DataTypes };
