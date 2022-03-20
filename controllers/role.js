const Role = require('../models/Role');
const { catchError, throwError } = require('../utils/errors');

exports.create = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    if (!role) throwError('ROLE_NOT_CREATED', 400);

    res.status(200).json({
      statusCode: 200,
      role,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.get = async (req, res) => {
  try {
    const role = await Role.findOne({ id: req.params.id });
    if (!role) throwError('ROLE_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      role,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.getAll = async (_, res) => {
  try {
    const roles = await Role.findAll();
    if (!roles) throwError('ROLES_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      roles,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.edit = async (req, res) => {
  try {
    const role = await Role.update(req.body, { id: req.params.id });
    if (!role) throwError('ROLE_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      role,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.delete = async (req, res) => {
  try {
    await Role.destroy({ id: req.params.id });

    res.status(200).json({
      statusCode: 200,
    });
  } catch (err) {
    catchError(res, err);
  }
};
