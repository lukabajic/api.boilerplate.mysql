const jwt = require('jsonwebtoken');

const { catchError, throwError } = require('../utils/errors');
const { jwtSecret } = require('../config');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');
    !authHeader && throwError('NOT_LOGGED_IN', 400);

    const token = authHeader.split(' ')[1];
    !token && throwError('NOT_LOGGED_IN', 400);

    const decodedToken = jwt.verify(token, jwtSecret);

    req.role = decodedToken.role;
    req.id = decodedToken.id;
    
    next();
  } catch (err) {
    catchError(res, err);
  }
};
