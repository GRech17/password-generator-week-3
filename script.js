// Assignment code
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let Ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let shiftCharacter = "!#$%&'()*+,-./:;<=>?@[]\^_`{}~|";
let wordLength;
let caseCheck; 
let numberCheck;
let shiftCharacterCheck;

// Determines length of password
function length () {
  wordLength = prompt("Choose a number between 8-128 for your password length");

    if (wordLength<8){
      alert("Password must be between 8-128 characters");
      length(); 
  } 
  
    else if (wordLength>128) {
      alert("Password must be between 8-128 characters");
      length(); 
  } 
  
    else if (isNaN(wordLength)){
      alert("Password must be between 8-128 characters");
      length();
    
      return wordLength;
  }
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
      casing ();
    }

    else {
      alert("Only 'y' 'yes' or 'n' 'no' is acceptable");
      casing ();
    }
    
    return caseCheck;
  }

// Determines if there are numbers in the password

// Determines if there are shiftCharacter's in the password

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Generates a password 
function generatePassword(){
  length();
  console.log(wordLength);
  casing();
  console.log(caseCheck);

let char = lowercase;
let Password = "";
if (caseCheck){
  char += Ucase;
}

else {
  char += lowercase;
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
