// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength = prompt(
  "Type the number of characters you would like your password to contain: "
);
function generatePassword() {}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
