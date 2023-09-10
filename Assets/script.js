// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var inputs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvzxyz0123456789!@#$%^&*()-_=+,<.>/?";

  function generatePassword() {
    var inputs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvzxyz0123456789!@#$%^&*()-_=+,<.>/?";
    var number = prompt("How long of a password do you want?", "Enter a number between 8 and 128");
    var types = confirm("Your password should contain lowercase, uppercase, numeric, and special characters.")
    if (types == false || number < 8 || number > 128) {
      alert("Your password should contain all of the above as well as fall between the number limits.  Please try again.")
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
