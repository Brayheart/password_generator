// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["1","2","3","4","5","6","7","8","9"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var characters = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var num = confirm("Do you want numbers in your password?")
  var lc = confirm("Do you want lower case letters in your password?")
  var uc = confirm("Do you want upper case letters in your password?")
  var sc = confirm("Do you want special characters in your password?")
  var length = prompt("Choose a length of at least 8 characters and no more than 128 characters")

  if(length < 8 || length > 128){
    alert("password must be between 8 and 128 characters")
    return
  }

  if(num === true){
    characters = characters.concat(numbers)
  }
  if(lc === true){
    characters = characters.concat(lowerCase)
  }
  if(uc === true){
    characters = characters.concat(upperCase)
  }
  if(sc === true){
    characters = characters.concat(specialChar)
  }

  var password = [];


  for (let i = 0; i < length; i++) {
    password.push(characters[Math.floor(Math.random() * Math.floor(characters.length))])
  }

  return password.join("")
}