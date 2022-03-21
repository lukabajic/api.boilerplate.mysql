const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config');

exports.generateToken = ({ id, role }) => {
  const token = jwt.sign({ id, role }, jwtSecret);
  return token;
};
