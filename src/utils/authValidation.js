const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const emailValidation = (email) => {
  let emailError = "";
  if (email === "") {
    emailError = "Email field is required.";
  } else if (!validateEmail(email)) {
    emailError = "Please enter a valid email address";
  }
  return emailError;
};

const validatePassword = (password) => {
  // Regular expressions to check for different types of characters
  const uppercaseRegex = /[A-Z]/;
  const numericRegex = /\d/;
  // eslint-disable-next-line
  const specialCharRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@#]/;

  // Check if password meets all criteria using regular expressions
  const hasUppercase = uppercaseRegex.test(password);
  const hasNumeric = numericRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  // Return true if all criteria are met, false otherwise
  return hasUppercase && hasNumeric && hasSpecialChar;
};

export const signinFormValidation = ({ email, password }) => {
  let emailError = emailValidation(email),
    passwordError = "";
  if (password === "") {
    passwordError = "Password field is required.";
  }
  return {
    isValid: emailError === "" && passwordError === "",
    errors: {
      email: emailError,
      password: passwordError,
    },
  };
};

export const signupFormValidation = ({ email, password, rPassword }) => {
  let rPassError = "",
    emailError = emailValidation(email),
    passwordError = "";

  if (password === "") {
    passwordError = "Password field is required.";
  } else if (!validatePassword(password)) {
    passwordError =
      "Must contain at least 1 upper case, numeric, and special character.";
  }
  if (rPassword === "") {
    rPassError = "Confirm Password field is required.";
  } else if (password !== rPassword) {
    rPassError = "Confirm password does not match new password.";
  }
  return {
    isValid: rPassError === "" && emailError === "" && passwordError === "",
    errors: {
      rPassword: rPassError,
      email: emailError,
      password: passwordError,
    },
  };
};
