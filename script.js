  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","/",":",";","<",",",">",".","?"]
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var numberSymbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","/",":",";","<",",",">",".","?","0","1","2","3","4","5","6","7","8","9"]
  var lowercaseSymbols = [ "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","/",":",";","<",",",">",".","?","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","/",":",";","<",",",">",".","?"]
  var lowercaseNumbers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","/",":",";","<",",",">",".","?"]
    var passwordLength
  var specialCharacter
  var confirmNumber
  var confirmCharacter
  var confirmUppercase
  var confirmLowercase
  
  
  // Write password to the #password input
  function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector ("#password");
  
    passwordText.value = password;}
  
  function generatePassword (){
    var passwordValid = true;
    
  (passwordValid === true)
       if ((passwordLength < 8 ) || (passwordLength <128));
       else if ( uppercaseNumbers) console.log (true)
       else if ( lowercaseNumbers )  console.log (true)
       else if (numbers) console.log (true)
       else if ( symbols )  console.log  (true)
       else if (uppercaseSymbols) console.log (true)
       else if( lowercaseSymbols )  console.log (true)
       else if (numberSymbols )  console.log (true)
  }
       
      
         
       
    

  
  
  
      
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  //generator functions
  
 