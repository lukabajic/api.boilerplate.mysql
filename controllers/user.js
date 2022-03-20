const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { catchError, throwError } = require('../utils/errors');

exports.create = async (req, res) => {
  const { password, ...rest } = req.body;
  try {
    const pw = await bcrypt.hash(password, 12);
    const user = await User.create({ ...rest, password: pw });
    if (!user) throwError('USER_NOT_CREATED', 400);

    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.get = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (!user) throwError('USER_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.getAll = async (_, res) => {
  try {
    const users = await User.findAll();
    if (!users) throwError('USERS_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      users,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.edit = async (req, res) => {
  try {
    const user = await User.update(req.body, { id: req.params.id });
    if (!user) throwError('USER_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.delete = async (req, res) => {
  try {
    await User.destroy({ id: req.params.id });

    res.status(200).json({
      statusCode: 200,
    });
  } catch (err) {
    catchError(res, err);
  }
};
