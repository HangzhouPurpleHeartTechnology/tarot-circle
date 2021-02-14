const Validator = require('validator');
const validText = require('./validText');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : '';
  data.phoneNumber = validText(data.phoneNumber) ? data.phoneNumber : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
    errors.handle = 'Name must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.handle = 'Name field is required';
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = 'phone number field is required';
  }

  if (!Validator.isMobilePhone(data.phoneNumber, ['am-AM', 'zh-CN'])) {
    errors.phoneNumber = 'phone number is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
