// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var caplet = "ABCDEFGHIJKLMNOPQRSTUVWXY";
    var lowlet = "abcdefghijklmnopqrstuvzxyz";
    var inpsym = "!@#$%^&*()-_=+,<.>/?"
    var inpNumbs = "0123456789";
    var inputs = [];
    var upper = confirm("Do you want Uppercase letters?")
    if (upper == true) {
      inputs += caplet;
    }
    var lower = confirm("Do you want lowercase letters")
    if (lower == true) {
      inputs += lowlet;
    }
    var Sym = confirm("Do you want symbols?")
    if (Sym == true) {
      inputs += inpsym;
    }
    var Nums = confirm("Do you want numbers?")
    if (Nums == true) {
      inputs += inpNumbs;
    }
    var number = prompt("How long of a password do you want?", "Enter a number between 8 and 128");
    if (number < 8 || number > 128) {
      alert("Your password should fall between the number limits.  Please try again.")
       }  
       else {
        index = Math.floor(Math.random()*inputs.length);
        temppass = inputs[index]; 
        while (number > temppass.length) {
          temppass += inputs[Math.floor(Math.random()*inputs.length)];
        }

       }
       return(temppass);
  }

  passwordText.value = password;
  document.getElementById("generate").innerHTML = "Generate New Password"
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
