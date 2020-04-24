// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input  

var lowerCase=["a", "s","d","c","f","j","e","r","w","l","v","x","n","q","p","y","u","z","b","o","h","g","i"];
var upperCase=["A","S","D","C","F","J","E","R","W","L","V","X","N","Q","P","Y","U","Z","B","O","H","G","I"];
var numbers=["1","2","3","4","5","6","7","8","9","0"];
var specialCharAt=["!","@","#","$","%","^","&","*","(",")"];
var passwordLength=["how many characters would you like your password to be? minimum 8 characters max 120 characters"]
var availableCharAt=[]


function writePassword() {
  
  var finalPassword=generatePassword();
  var passwordText = document.querySelector('#password');
   passwordText.textContent=finalPassword

}
  
 
  
  

  function createAvailableOptions() {
    
  }

  

  function generatePassword(password){

    

    //add another confirm to determine password length

    var passwordLength = prompt("how long would you like your password to be?")

  
 
    //set password length equal to variable
 


    var isLowerCase = confirm("Would you like to use lowercase letter?")
    console.log(isLowerCase)
    if(isLowerCase === true) { 
      for (var i=0; i < lowerCase.length; i++) {
        availableCharAt.push(lowerCase[i])
      }
      
    }

    var isUpperCase = confirm("would you like to use uppercase letters?")
    console.log(isUpperCase)
    if(isUpperCase === true) {
      for (var i=0; i < upperCase.length; i++) {
        availableCharAt.push(upperCase[i])
      }
     
    }

    var isNumbers = confirm("would you like to use numbers?")
    console.log(isNumbers)
    if(isNumbers === true) {
      for (var i=0; i < numbers.length; i++) {
        availableCharAt.push(numbers[i])
      }
     
    }
    var isSpecialCharAt = confirm("would you like to use special characters?")
    console.log(isSpecialCharAt)
    if(isSpecialCharAt === true){
      for (var i=0; i < specialCharAt.length; i++) {
        availableCharAt.push(specialCharAt[i])
     
    }
  }
    var finalPassword ="";

     finalPassword+=availableCharAt[1]  
     for (var i=0; i < finalPassword.length; i++) {
      availableCharAt.push(finalPassword[i])
    
     }

// loop through available char array the number of times the user requested the password length to be
   var finalPassword ="";
   for (var i=0; i < passwordLength; i++) {
    finalPassword += availableCharAt[(Math.floor(Math.random() * (availableCharAt.length -1) ))]
    
     
   }

  return finalPassword

  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// function generate(Math.floor(Math.random() * Math.floor())

// return finalPassword
