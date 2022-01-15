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
var getIncludeLowerCase = function() {
  var input = confirm("Question 2 of 5: Do you want to include lower case characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeLowerCase = input;
  console.log("Include Lower Case: " + passwordCriteria.includeLowerCase);
}

// Prompt for Upper Case
var getIncludeUpperCase = function() {
  var input = confirm("Question 3 of 5: Do you want to include upper case characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeUpperCase = input;
  console.log("Include Upper Case: " + passwordCriteria.includeUpperCase);
}

// Prompt for Numeric
var getIncludeNumbers = function() {
  var input = confirm("Question 4 of 5: Do you want to include numbers? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeNumbers = input;
  console.log("Include Numbers: " + passwordCriteria.includeNumbers);
}

// Prompt for Special Characters
var getIncludeSpecialCharacters = function() {
  var input = confirm("Question 5 of 5: Do you want to include special characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeSpecialCharacters = input;
  console.log("Include Special Characters: " + passwordCriteria.includeSpecialCharacters);
}

var generatePassword = function() {
  getPasswordLength();
  getIncludeLowerCase();
  getIncludeUpperCase();
  getIncludeNumbers();
  getIncludeSpecialCharacters();
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
