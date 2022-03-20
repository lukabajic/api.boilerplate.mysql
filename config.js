require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  mysqlDB: process.env.MYSQL_DB,
  mysqlUser: process.env.MYSQL_USER,
  mysqlPW: process.env.MYSQL_PW,
  jwtSecret: process.env.JWT_SECRET,
  site: process.env.SITE,
};
