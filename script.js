// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charArrs = [];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

  var passLength = prompt("How long would you like your password to be? Please choose 8 to 128 characters");
    if (passLength < 8 || passLength > 128) {
      var passLength = prompt("You chose WRONG. Please choose 8 to 128 characters for your super secure password.");
    }
  var passLower = prompt("Would you like to include lowercase letters? Yes or No?");
    if (passLower === "Yes" || passLower === "Y" || passLower === "yes" || passLower === "y") {
      charArrs.push(lower);
    }
  var passUpper = prompt("Would you like to include uppercase letters? Yes or No?");
    if (passUpper === "Yes" || passUpper === "Y" || passUpper === "yes" || passUpper === "y") {
      charArrs.push(upper);
    }
  var passNum = prompt("Would you like to include numbers? Yes or No?");
    if (passNum === "Yes" || passNum === "Y" || passNum === "yes" || passNum === "y") {
      charArrs.push(num);
    }
  var passSpecials = prompt("Would you like to include special characters? Yes or No?");
    if (passSpecials === "Yes" || passSpecials === "Y" || passSpecials === "yes" || passSpecials === "y") {
      charArrs.push(specials);
    }

  var chars = charArrs.flat();

  if (chars.length === 0) {
    alert("You didn't select any letters, numbers or characters. Try again and do better.");
    generatePassword();
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var pass = [];
  for (var i = 0; i < passLength; i++) {
    pass.push(chars[getRandomInt(chars.length)]);
  }
  return pass.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
