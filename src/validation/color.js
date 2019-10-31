const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateColorsInput(data) {
  let errors = {};

  data.product_color = !isEmpty(data.product_color) ? data.product_color : '';
  data.front_view = !isEmpty(data.front_view) ? data.front_view : '';
  data.back_view = !isEmpty(data.back_view) ? data.back_view : '';
  data.side_view = !isEmpty(data.side_view) ? data.side_view : '';
  data.interior_view = !isEmpty(data.interior_view) ? data.interior_view : '';

  if (Validator.isEmpty(data.product_color)) {
    errors.product_color = 'Color name field is required';
  }

  if (Validator.isEmpty(data.front_view)) {
    errors.front_view = 'Product front view is required';
  }

  if (Validator.isEmpty(data.back_view)) {
    errors.back_view = 'Product back view is required';
  }

  if (Validator.isEmpty(data.side_view)) {
    errors.side_view = 'Product side view is required';
  }

  if (Validator.isEmpty(data.interior_view)) {
    errors.interior_view = 'Product interior view is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
