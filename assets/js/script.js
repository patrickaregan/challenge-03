// ************************************
// ********** Character Sets **********
// ************************************

// character sets
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

// character buckets
var characterBucket = ['']; // this is the bucket of characters to choose the password from and depends on the criteria selected by the user.
var passwordBucket = ['']; // this is the bucket to hold the randomly selected characters for the password.


// ************************************
// ******* Password Criteria **********
// ************************************

// Object to hold password criteria
var passwordCriteria = {
  passwordLength: 8,
  includeLowerCase: true,
  includeUpperCase: true,
  includeNumbers: true,
  includeSpecialCharacters: true
}


// ************************************
// ************ Prompts ***************
// ************************************

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
  var input = confirm("Question 2 of 5: Do you want to include lowercase characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeLowerCase = input;
  console.log("Include Lowercase: " + passwordCriteria.includeLowerCase);
}

// Prompt for Upper Case
var getIncludeUpperCase = function() {
  var input = confirm("Question 3 of 5: Do you want to include uppercase characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeUpperCase = input;
  console.log("Include Uppercase: " + passwordCriteria.includeUpperCase);
}

// Prompt for Numeric Characters
var getIncludeNumbers = function() {
  var input = confirm("Question 4 of 5: Do you want to include numeric characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeNumbers = input;
  console.log("Include Numeric Characters: " + passwordCriteria.includeNumbers);
}

// Prompt for Special Characters
var getIncludeSpecialCharacters = function() {
  var input = confirm("Question 5 of 5: Do you want to include special characters? Click OK for Yes or Cancel for No.");
  passwordCriteria.includeSpecialCharacters = input;
  console.log("Include Special Characters: " + passwordCriteria.includeSpecialCharacters);
}


// ************************************
// ** Validate Character Selection ****
// ************************************

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


// ************************************
// **** Fill Character Bucket *********
// ************************************

var buildCharacterBucket = function() {
  // remove the empty element from the array
  characterBucket.pop();

  //console.log("lowercase character count: " + lowerCaseCharacters.length);
  //console.log("uppercase character count: " + upperCaseCharacters.length);
  //console.log("numberic character count: " + numericCharacters.length);
  //console.log("special character count: " + specialCharacters.length);

  // add lowercase characters to the bucket if that option was chosen by the user.
  if (passwordCriteria.includeLowerCase) {
    for (var i = 0; i < lowerCaseCharacters.length; i++) {
      characterBucket.push(lowerCaseCharacters[i]);
    }
  }

  // add uppercase characters to the bucket if that option was chosen by the user.
  if (passwordCriteria.includeUpperCase) {
    for (var i = 0; i < upperCaseCharacters.length; i++) {
      characterBucket.push(upperCaseCharacters[i]);
    }
  }

  // add numeric characters to the bucket if that option was chosen by the user.
  if (passwordCriteria.includeNumbers) {
    for (var i = 0; i < numericCharacters.length; i++) {
      characterBucket.push(numericCharacters[i]);
    }
  }

  // add special characters to the bucket if that option was chosen by the user.
  if (passwordCriteria.includeSpecialCharacters) {
    for (var i = 0; i < specialCharacters.length; i++) {
      characterBucket.push(specialCharacters[i]);
    }
  }
  
  //console.log("Character Bucket: " + characterBucket);
}


// ************************************
// ***** Password Bucket Functions ****
// ************************************

// random number function
var getRandomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  return value;
}

var passwordBucketIsValid = function() {
  var result = true;
  // this function checks if the password bucket contains
  // at least one character from each character type selected
  // by the user and returns true if so.
  console.log("Validate the password to ensure it contains at least one character from every character type selected.");

  // check for lowercase characters
  if (passwordCriteria.includeLowerCase) {
    console.log("Check password for lowercase characters.");
    var counter = 0;
    //console.log("Counter before loop: " + counter);
    for (var i = 0; i < lowerCaseCharacters.length; i++) {
      if (passwordBucket.includes(lowerCaseCharacters[i])) {
        counter++;
      }
    }
    console.log("Password Bucket: " + passwordBucket);
    console.log("Lowercase characters: " + counter);
    if (counter < 1) {
      result = false;
    }
  }

  // check for uppercase characters
  if (passwordCriteria.includeUpperCase) {
    console.log("Check password for uppercase characters.");
    var counter = 0;
    //console.log("Counter before loop: " + counter);
    for (var i = 0; i < upperCaseCharacters.length; i++) {
      if (passwordBucket.includes(upperCaseCharacters[i])) {
        counter++;
      }
    }
    console.log("Password Bucket: " + passwordBucket);
    console.log("Uppercase characters: " + counter);
    if (counter < 1) {
      result = false;
    }
  }

  // check for numeric characters
  if (passwordCriteria.includeNumbers) {
    console.log("Check password for numeric characters.");
    var counter = 0;
    //console.log("Counter before loop: " + counter);
    for (var i = 0; i < numericCharacters.length; i++) {
      if (passwordBucket.includes(numericCharacters[i])) {
        counter++;
      }
    }
    console.log("Password Bucket: " + passwordBucket);
    console.log("Numeric characters: " + counter);
    if (counter < 1) {
      result = false;
    }
  }

  // check for special characters
  if (passwordCriteria.includeSpecialCharacters) {
    console.log("Check password for special characters.");
    var counter = 0;
    //console.log("Counter before loop: " + counter);
    for (var i = 0; i < specialCharacters.length; i++) {
      if (passwordBucket.includes(specialCharacters[i])) {
        counter++;
      }
    }
    console.log("Password Bucket: " + passwordBucket);
    console.log("Special characters: " + counter);
    if (counter < 1) {
      result = false;
    }
  }

  return result;
}

var buildPasswordBucket = function() {
  // remove the empty element from the array
  passwordBucket.pop();

  // create the password bucket
  for (var i = 0; i < passwordCriteria.passwordLength; i++) {
    var randomNumber = getRandomNumber(0, characterBucket.length - 1);
    //console.log("Random Number from Character Bucket: " + randomNumber);
    passwordBucket.push(characterBucket[randomNumber]); // choose a character from the bucket randomly
  }

  // check if password bucket contains at least one character from each character type selected by the user
  if (passwordBucketIsValid()) {
    console.log("The generated password is valid!");
  } else {
    console.log("The generated password is NOT valid. Try again!");
    passwordBucket = ['']; //reset the password bucket
    buildPasswordBucket();
  }
}


var generatePassword = function() {
  // this will be returned after we generate it.
  var password = "Your Secure Password";

  // Get password criteria
  getPasswordLength();
  getIncludeLowerCase();
  getIncludeUpperCase();
  getIncludeNumbers();
  getIncludeSpecialCharacters();
  if (characterSelectionIsValid()) {
    console.log("The character type selection is valid!");
    buildCharacterBucket();
    buildPasswordBucket();
    password = passwordBucket.join("");
  } else {
    console.log("The character type selection is NOT valid!");
    alert("You must include at least one type of character: lowercase, uppercase, numeric or special. let's start over.");
    generatePassword();
  }

  // reset the character and password buckets for another round.
  characterBucket = [''];
  passwordBucket = [''];

  // return password
  return password;
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
