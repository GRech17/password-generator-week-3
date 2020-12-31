// Assignment code here
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOP";
let number = "0123456789";
let shiftCharacter = "!#$%&'()*+,-./:;<=>?@[]\^_`{}~|";
let Length;
let caseCheck; 
let numberCheck;
let shiftCharacterCheck;

// Determines length of password
function length () {
  Length = prompt("Choose a number between 8-128 for your password length");

  if (Length<8){
    alert("Password must be between 8-128 characters");
    length(); 
  } else if (Length>128) {
    alert("Password must be between 8-128 characters");
    length(); 
  } else if (isNaN(Length)){
    alert("Password must be between 8-128 characters");
    length();
    
    return Length;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generates a password 
function generatePassword(){
  length();
  console.log(Length);
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
