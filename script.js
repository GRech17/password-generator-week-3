// Assignment code
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let Ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let shiftCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{}~|";
let wordLength;
let caseCheck; 
let numberCheck;
let shiftCharacterCheck;

// Determines length of password
function length() {
  wordLength = prompt("Choose a number between 8-128 for your password length");

    if (wordLength<8){
      alert("Only numbers between 8-128 are acceptable");
      length(); 
  } 
  
    else if (wordLength>128) {
      alert("Only numbers between 8-128 are acceptable");
      length(); 
  } 
  
    else if (isNaN(wordLength)){
      alert("Only numbers between 8-128 are acceptable");
      length();
  }  
    
  return wordLength;
}

// Determines if there are uppercase letters in the password
function casing() {
  caseCheck = prompt("Include uppercase letters in your password? \n ('yes' or 'no')");

    if (caseCheck === "y" || caseCheck === "yes"){
      caseCheck = true;
      return caseCheck;
    }

    else if (caseCheck === "n" || caseCheck === "no"){
      caseCheck = false;
      return caseCheck;
    }

    else if (caseCheck === null || caseCheck === " "){
      alert("Only 'y' 'yes' or 'n' 'no' is acceptable");
      casing();
    }

    else {
      alert("Only 'y' 'yes' or 'n' 'no' is acceptable");
      casing();
    }
    
    return caseCheck;
  }

// Determines if there are numbers in the password
function numberFunc() {
  numberCheck = prompt("Include numbers in your password? \n ('yes' or 'no')");

  if (numberCheck === "y" || numberCheck === "yes"){
    numberCheck = true;
    return numberCheck;
  }

  else if (numberCheck === "n" || numberCheck === "no"){
    numberCheck = false;
    return numberCheck;
  }

  else if (numberCheck === null || numberCheck === ""){
    alert("Only 'y' 'yes' or 'n' 'no' is acceptable");
    numberFunc();
  }

  else {
    alert("Only 'y' 'yes' or 'n' 'no' is acceptable")
    numberFunc();
  }

  return numberCheck;
}

// Determines if there are shiftCharacter's in the password
function shiftChar() {
  shiftCharacterCheck = prompt("Include special shift characters in your password? \n ('yes' or 'no')");

  if (shiftCharacterCheck === "y" || shiftCharacterCheck === "yes"){
    shiftCharacterCheck = true; 
    return shiftCharacterCheck;
  }

  else if (shiftCharacterCheck === "n" || shiftCharacterCheck === "no"){
    shiftCharacterCheck = false;
    return shiftCharacterCheck;
  }

  else if (shiftCharacterCheck === null || shiftCharacterCheck === ""){
    alert("Only 'y' 'yes' or 'n' 'no' is acceptable");
    shiftChar();
  }

  else {
    alert("Only 'y' 'yes' or 'n' 'no' is acceptable");
    shiftChar();
  }

  return shiftCharacterCheck;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Generates a password with conditional statements 
function generatePassword(){
  length();
  console.log(wordLength);
  casing();
  console.log(caseCheck);
  numberFunc();
  console.log(numberCheck);
  shiftChar();
  console.log(shiftCharacterCheck);

let char = lowercase;
let Password = "";

if (caseCheck && numberCheck && shiftCharacterCheck){
  char += Ucase + number + shiftCharacter;
}

else if (caseCheck && numberCheck){
  char += Ucase + number;
}

else if (numberCheck && shiftCharacterCheck){
  char += number + shiftCharacter;
}

else if (caseCheck && shiftCharacterCheck){
  char += Ucase + shiftCharacter;
}

else if (caseCheck){
  char += Ucase;
}

else if (numberCheck){
  char += number;
}

else if (shiftCharacterCheck){
  char += shiftCharacter;
}

else {
  char === lowercase;
}

for (let i = 0; i < wordLength; i++){
  Password += char.charAt(Math.floor(Math.random() * char.length));
}

return Password;

}


// Write password to the #password input
function writePassword() {
  let password = ""; 
  password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
