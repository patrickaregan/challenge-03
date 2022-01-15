// Assignment code here

// Object to hold password criteria
var passwordCriteria = {
  passwordLength: 8,
  includeLowerCase: true,
  includeUpperCase: true,
  includeNumbers: true,
  includeSpecialCharacters: true
}

// Prompt to get the Password Length
var getPasswordLength = function() {
  var input = prompt("Question 1 of 5: Please enter the length you want your password to be. Your choice must be between 8 and 128 characters.");
  if(input >= 8 && input <= 128) {
    passwordCriteria.passwordLength = input;
  } else {
    getPasswordLength();
  }
  console.log("Password Length: " + passwordCriteria.passwordLength);
}

// Prompt for Lower Case
var includeLowerCase = function() {
  var input = confirm("Question 2 of 5: Do you want to include lowercase characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeLowerCase = input;
  console.log("Include Lowercase: " + passwordCriteria.includeLowerCase);
}

// Prompt for Upper Case
var includeUpperCase = function() {
  var input = confirm("Question 3 of 5: Do you want to include uppercase characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeUpperCase = input;
  console.log("Include Uppercase: " + passwordCriteria.includeUpperCase);
}

// Prompt for Numeric Characters
var includeNumbers = function() {
  var input = confirm("Question 4 of 5: Do you want to include numeric characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeNumbers = input;
  console.log("Include Numeric Characters: " + passwordCriteria.includeNumbers);
}

// Prompt for Special Characters
var includeSpecialCharacters = function() {
  var input = confirm("Question 5 of 5: Do you want to include special characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeSpecialCharacters = input;
  console.log("Include Special Characters: " + passwordCriteria.includeSpecialCharacters);
}

// Validate at lease one character type selected
var characterSelectionIsValid = function() {
  
  // set the result to false to start
  var result = false;
  
  // Check if at least one of the 4 character type selections is true.
  // if so the result will be set to true.
  // if none are true then the result will remain false.
  
  // Check lower case
  if (passwordCriteria.includeLowerCase) {
    result = true;
  }

  // Check upper case
  if (passwordCriteria.includeUpperCase) {
    result = true;
  }

  // Check numerice
  if (passwordCriteria.includeNumbers) {
    result = true;
  }

  // Check special characters
  if (passwordCriteria.includeSpecialCharacters) {
    result = true;
  }

  // return the result
  return result;
}

var generatePassword = function() {
  getPasswordLength();
  includeLowerCase();
  includeUpperCase();
  includeNumbers();
  includeSpecialCharacters();
  if (characterSelectionIsValid()) {
    console.log("The character selection is valid!");
  } else {
    console.log("The character selection is NOT valid!");
    alert("You must include at least one type of character: lowercase, uppercase, numeric or special. let's start over.");
    generatePassword();
  }
  return "test-result";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
