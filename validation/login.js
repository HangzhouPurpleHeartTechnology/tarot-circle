const Validator = require('validator');
const validText = require('./validText');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = validText(data.username) ? data.name : '';
  data.phoneNumber = validText(data.phoneNumber) ? data.phoneNumber : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
    errors.handle = 'Name must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.handle = 'Name field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
