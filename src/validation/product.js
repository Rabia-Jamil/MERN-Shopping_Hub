const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProductInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.front_view = !isEmpty(data.front_view) ? data.front_view : '';
  data.back_view = !isEmpty(data.back_view) ? data.back_view : '';
  data.side_view = !isEmpty(data.side_view) ? data.side_view : '';
  data.interior_view = !isEmpty(data.interior_view) ? data.interior_view : '';
  data.category = !isEmpty(data.category) ? data.category : '';
  data.seller = !isEmpty(data.seller) ? data.seller : '';
  data.price = !isEmpty(data.price) ? data.price : 0;
  data.description = !isEmpty(data.description) ? data.description : '';

  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = 'Product name needs to be between 2 and 4 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Product name is required';
  }

  if (Validator.isEmpty(data.front_view)) {
    errors.front_view = "Product's front view is required";
  }

  if (Validator.isEmpty(data.back_view)) {
    errors.back_view = "Product's back view is required";
  }

  if (Validator.isEmpty(data.side_view)) {
      errors.side_view = "Product's side view is required";
  }
  
  if (Validator.isEmpty(data.interior_view)) {
      errors.interior_view = "Product's interior view is required";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = ' Category field is required';
  }

  if (Validator.isEmpty(data.seller)) {
    errors.seller = 'Seller field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
