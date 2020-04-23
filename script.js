// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input  

var lowerCase=["a", "s","d","c","f","j","e","r","w","l","v","x","n","q","p","y","u","z","b","o","h","g","i"];
var upperCase=["A","S","D","C","F","J","E","R","W","L","V","X","N","Q","P","Y","U","Z","B","O","H","G","I"];
var numbers=["1","2","3","4","5","6","7","8","9","0"];
var specialCharAt=["!","@","#","$","%","^","&","*","(",")"];
var passwordLength=["how many characters would you like your password to be? minimum 8 characters max 120 characters"]



function writePassword() {
  var passwordText = document.querySelector('#password');
  // var specialCharAt = indexOf(specialChar);
  // var lowerCase = indexOf(lowerCase);
  // var upperCase = indexOf(upperCase);
  // var numbers = indexOf(numbers);
  
  generatePassword();
  
  // (Math.floor(Math.random() * Math.floor())

  function createAvailableOptions() {
    
  }

  

  function generatePassword(password){
    var isLowerCase = confirm("Would you like to use lowercase letter?")
    console.log(isLowerCase)
    if(isLowerCase === true) {
      alert("yes its true")
    }

    var isUpperCase = confirm("would you like to use uppercase letters?")
    console.log(isUpperCase)
    if(isUpperCase === true) {
      alert ("yes its true")
    }

    var isNumbers = confirm("would you like to use numbers?")
    console.log(isNumbers)
    if(isNumbers === true) {
      alert ("yes its true")
    }
    var isSpecialCharAt = confirm("would you like to use special characters?")
    console.log(isSpecialCharAt)
    if(isSpecialCharAt === true){
      alert ("yes its true")
    }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
