// Assignment code here
//Arrays to be used to include  in the password
const lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbolList = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', "'" ];

//Get user input from prompts and validate 
function getUserInput() {
  //Get user input for password length
  var passLength = parseInt( prompt("Please Enter Password Length between (8 .. 128)"));
  if (passLength === null || isNaN(passLength)  )
    {
      alert("Please Enter password length as a number!");
      return;
    }    
  else if (passLength < 8 || passLength > 128)
    {
    alert("Password length must be in the specified range (8 .. 128)!");
    return;
    }  
  //Get user input for different types of characters to be included in the password
  var IncUppCase = confirm("Click OK If You Want To Include Upper Case");
  var IncLowCase = confirm("Click OK If You Want To Include Lower Case");
  var IncNumbers = confirm("Click OK If You Want To Include Numbers");
  var IncSymbols = confirm("Click OK If You Want To Include Special Characters");    

  // Check if user selected any types of character to be included, if none return
  if (
    IncLowCase === false && IncUppCase === false &&
    IncNumbers === false && IncSymbols === false
  ) {
    alert('At least one character type must be selected!');
    return;
  }

  // Use an object to store user input
  var userSelection = {
      passLength: passLength,
      IncUppCase: IncUppCase,
      IncLowCase: IncLowCase,
      IncNumbers: IncNumbers,
      IncSymbols: IncSymbols
    };

    return userSelection;
} //End getUserInput

// Function return a random value from the passed array
function getRandomEl(inArray) {
  var elIndex = Math.floor(Math.random() * inArray.length);
  var elValue = inArray[elIndex];

  return elValue;
} //End getRandomEl

function generatePassword() {

  var selection = getUserInput();
  // Variables / Arrays to store concatination and password 
  var password = [];
  var availChars = [];
  var mustHaveChars = [];
  // Added a check to avoid js cant read property error 
  if (typeof selection != "undefined") {
    //check the user selection and build available characters and must have character to be used 
    if (selection.IncUppCase){
      availChars = availChars.concat(upperAlpha);
      mustHaveChars.push(getRandomEl(upperAlpha));
    }
    if (selection.IncLowCase){
      availChars = availChars.concat(lowerAlpha);
      mustHaveChars.push(getRandomEl(lowerAlpha));
    }
    if (selection.IncNumbers){
      availChars = availChars.concat(numberList);
      mustHaveChars.push(getRandomEl(numberList));
    }
    if (selection.IncSymbols){
      availChars = availChars.concat(symbolList);
      mustHaveChars.push(getRandomEl(symbolList));
    }
    //Build password from the available characters
    for (var i = 0; i < selection.passLength; i++) {
      var passChars = getRandomEl(availChars);
      password.push(passChars);
    }
    // Add must have characters 
    for (var i = 0; i < mustHaveChars.length; i++) {
      password[i] = mustHaveChars[i];
    }
  }
  return password.join('');
} //End of generatePassword

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);