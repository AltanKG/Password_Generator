// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password length
var passLength = prompt(
  "Type the number of characters you would like your password to contain (number must be between 8-128): "
);

// Variable declaration of password criteria
var incSpecial = confirm(
  "Click ok, if you would like to include special characters."
);
var incNumeric = confirm(
  "Click ok, if you would like to include numeric characters."
);
var incLower = confirm(
  "Click ok, if you would like to include lowercase characters."
);
var incUpper = confirm(
  "Click ok, if you would like to include uppercase characters."
);

// Variable declaration of characters
var charSpecial = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var charNumeric = "0123456789";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function generates the password
function generatePassword() {
  // Declaring an empty array for password
  var createPassword = [];

  // Code procedes if criteria are met
  if (passLength > 7 && passLength < 129) {
    if (incSpecial && incNumeric && incLower && incUpper) {
      // Runs a loop to select random characters and then insert it into empty password array
      for (i = 0; i < passLength; i++) {
        // Selects a random special character from string
        var randomSpec = charSpecial.charAt(
          Math.floor(Math.random() * charSpecial.length)
        );
        // Selects a random numeric character from string
        var randomNum = charNumeric.charAt(
          Math.floor(Math.random() * charNumeric.length)
        );
        // Selects a random lowercase character from string
        var randomLow = charLower.charAt(
          Math.floor(Math.random() * charLower.length)
        );
        // Selects a random uppercase character from string
        var randomUpp = charUpper.charAt(
          Math.floor(Math.random() * charUpper.length)
        );
        // Makes a concat string of the random selected characters
        var randomChars = randomSpec.concat(randomNum, randomLow, randomUpp);
        // From the random characters, one of them is randomly chosen
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        // Adds the randomly chosen character to the password array
        createPassword.push(randomCharSelect);
        // Removes commas from the array to string conversion
        var stringPassword = createPassword.join("");
      }

      // Code from if statement is repeated for other scenarios
    } else if (incSpecial && incNumeric && incLower) {
      for (i = 0; i < passLength; i++) {
        var randomSpec = charSpecial.charAt(
          Math.floor(Math.random() * charSpecial.length)
        );
        var randomNum = charNumeric.charAt(
          Math.floor(Math.random() * charNumeric.length)
        );
        var randomLow = charLower.charAt(
          Math.floor(Math.random() * charLower.length)
        );

        var randomChars = randomSpec.concat(randomNum, randomLow);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        createPassword.push(randomCharSelect);
        var stringPassword = createPassword.join("");
      }
    } else if (incSpecial && incLower && incUpper) {
      for (i = 0; i < passLength; i++) {
        var randomSpec = charSpecial.charAt(
          Math.floor(Math.random() * charSpecial.length)
        );
        var randomUpp = charUpper.charAt(
          Math.floor(Math.random() * charUpper.length)
        );
        var randomLow = charLower.charAt(
          Math.floor(Math.random() * charLower.length)
        );

        var randomChars = randomSpec.concat(randomLow, randomUpp);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        createPassword.push(randomCharSelect);
        var stringPassword = createPassword.join("");
      }
    } else if (incNumeric && incLower && incUpper) {
      for (i = 0; i < passLength; i++) {
        var randomUpp = charUpper.charAt(
          Math.floor(Math.random() * charUpper.length)
        );
        var randomNum = charNumeric.charAt(
          Math.floor(Math.random() * charNumeric.length)
        );
        var randomLow = charLower.charAt(
          Math.floor(Math.random() * charLower.length)
        );

        var randomChars = randomUpp.concat(randomNum, randomLow);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        createPassword.push(randomCharSelect);
        var stringPassword = createPassword.join("");
      }
    } else if (incSpecial && incNumeric) {
      for (i = 0; i < passLength; i++) {
        var randomSpec = charSpecial.charAt(
          Math.floor(Math.random() * charSpecial.length)
        );
        var randomNum = charNumeric.charAt(
          Math.floor(Math.random() * charNumeric.length)
        );

        var randomChars = randomSpec.concat(randomNum);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        createPassword.push(randomCharSelect);
        var stringPassword = createPassword.join("");
      }
    } else if (incSpecial && incLower) {
      for (i = 0; i < passLength; i++) {
        var randomSpec = charSpecial.charAt(
          Math.floor(Math.random() * charSpecial.length)
        );
        var randomLow = charLower.charAt(
          Math.floor(Math.random() * charLower.length)
        );

        var randomChars = randomSpec.concat(randomLow);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        createPassword.push(randomCharSelect);
        var stringPassword = createPassword.join("");
      }
    } else if (incSpecial && incUpper) {
      for (i = 0; i < passLength; i++) {
        var randomSpec = charSpecial.charAt(
          Math.floor(Math.random() * charSpecial.length)
        );

        var randomUpp = charUpper.charAt(
          Math.floor(Math.random() * charUpper.length)
        );

        var randomChars = randomSpec.concat(randomUpp);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        createPassword.push(randomCharSelect);
        var stringPassword = createPassword.join("");
      }
    } else if (incNumeric && incLower) {
      for (i = 0; i < passLength; i++) {
        var randomNum = charNumeric.charAt(
          Math.floor(Math.random() * charNumeric.length)
        );
        var randomLow = charLower.charAt(
          Math.floor(Math.random() * charLower.length)
        );

        var randomChars = randomNum.concat(randomLow);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        createPassword.push(randomCharSelect);
        var stringPassword = createPassword.join("");
      }
    } else if (incNumeric && incUpper) {
      for (i = 0; i < passLength; i++) {
        var randomNum = charNumeric.charAt(
          Math.floor(Math.random() * charNumeric.length)
        );
        var randomUpp = charUpper.charAt(
          Math.floor(Math.random() * charUpper.length)
        );

        var randomChars = randomNum.concat(randomUpp);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        createPassword.push(randomCharSelect);
        var stringPassword = createPassword.join("");
      }
    } else if (incLower && incUpper) {
      for (i = 0; i < passLength; i++) {
        var randomLow = charLower.charAt(
          Math.floor(Math.random() * charLower.length)
        );
        var randomUpp = charUpper.charAt(
          Math.floor(Math.random() * charUpper.length)
        );

        var randomChars = randomLow.concat(randomUpp);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        createPassword.push(randomCharSelect);
        var stringPassword = createPassword.join("");
      }
    } else if (incSpecial) {
      for (i = 0; i < passLength; i++) {
        var randomSpec = charSpecial.charAt(
          Math.floor(Math.random() * charSpecial.length)
        );

        createPassword.push(randomSpec);
        var stringPassword = createPassword.join("");
      }
    } else if (incNumeric) {
      for (i = 0; i < passLength; i++) {
        var randomNum = charNumeric.charAt(
          Math.floor(Math.random() * charNumeric.length)
        );

        createPassword.push(randomNum);
        var stringPassword = createPassword.join("");
      }
    } else if (incLower) {
      for (i = 0; i < passLength; i++) {
        var randomLow = charLower.charAt(
          Math.floor(Math.random() * charLower.length)
        );

        createPassword.push(randomLow);
        var stringPassword = createPassword.join("");
      }
    } else if (incUpper) {
      for (i = 0; i < passLength; i++) {
        var randomUpp = charUpper.charAt(
          Math.floor(Math.random() * charUpper.length)
        );

        createPassword.push(randomUpp);
        var stringPassword = createPassword.join("");
      }
    } else {
      var message = alert(
        "At least one character type must be selected. Refresh the page to start again."
      );
    }
  } else {
    var message = alert(
      "Password must be at least 8 characters and no larger than 128 characters. Refresh the page to start again."
    );
  }
  // Returns the functions value as stringPassword
  return stringPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
