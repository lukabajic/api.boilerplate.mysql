const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { generateToken } = require('../utils/jwt');
const { throwError, catchError } = require('../utils/errors');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    !user && throwError('USER_NOT_FOUND', 404);
    const compare = await bcrypt.compare(password, user.password);
    !compare && throwError('USER_NOT_FOUND', 404);
    const token = generateToken({ id: user.id, role: user.role });

    res.status(200).json({
      statusCode: 200,
      token,
      expiresIn: 14 * 24 * 60 * 60 * 1000,
      user,
    });
  } catch (err) {
    catchError(res, err);
  }
};
