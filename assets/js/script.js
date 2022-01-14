// Assignment code here

var criteria = {
  length: 8,
  lowerCase: true,
  upperCase: true,
  numberic: true,
  specialCharacters: true
}

var getLength = function() {
  var input = prompt("Question 1 of 5: Please enter the length of your password between 8 and 128 characters.");
  if(input >= 8 && input <= 128) {
    criteria.length = input;
  } else {
    getLength();
  }
  console.log("Password Length: " + criteria.length);
}

var getLowerCase = function() {
  var input = confirm("Question 2 of 5: Do you want to include lower case characters? Click OK for Yes or Cancel for No.");
  criteria.lowerCase = input;
  console.log("Password Length: " + criteria.lowerCase);
}

var generatePassword = function() {
  getLength();
  getLowerCase();
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
