function validateForm() {
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;

  // Email validation
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Password validation
  if (!isValidPassword(password)) {
    alert("Please enter a valid password. It should have a minimum of 8 characters, at least one number, and at least one capital letter.");
    return false;
  }
}

function isValidEmail(email) {
  // Check if email has "@" character, no spaces, no leading numbers, and no capital letters
  var emailRegex = /^[^@\s][A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]+(\.[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Check if password has a minimum of 8 characters, at least one number, and at least one capital letter
  var passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}