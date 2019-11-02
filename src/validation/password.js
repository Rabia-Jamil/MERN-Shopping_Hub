const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePasswordInput(data) {
  let errors = {};

  data.old_password = !isEmpty(data.old_password) ? data.old_password : '';
  data.new_password = !isEmpty(data.new_password) ? data.new_password : '';

  if (Validator.isEmpty(data.old_password)) {
    errors.old_password = 'This field is required';
  }

  if (Validator.isEmpty(data.new_password)) {
    errors.new_password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
