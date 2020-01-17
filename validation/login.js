const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  console.log(data);
  // Convert empty fields to an empty string so we can use validator functions
  data.user_email = !isEmpty(data.user_email) ? data.user_email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email checks
  if (Validator.isEmpty(data.user_email)) {
    console.log
    errors.email = "Email/Username field is required";
  } 
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
