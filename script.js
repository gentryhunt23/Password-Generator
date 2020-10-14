$(document).ready(function () {
  $('#reset').hide();
  //   // Assignment Code
  // var generateBtn = $("#generate");
  // // Write password to the #password input
  // function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = $("#password");
  //   passwordText.value = password;
  // }
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
  var selected = [];
  var password = [];


 
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var upperCase = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
  

  //toggle checkbox event handler
  $("#confirm").click(function(){
    //if($('.check-group').prop('checked')){
      $(".check-group").attr('disabled', 'disabled');
      $(this).prop('disabled', true)
      $('#generate').prop('disabled', false);
      $('#reset').show();

  //  }

  })

  $("#generate").click(function () {
    if($("#numbers").prop("checked")){
      selected.push(numbers)
    }
    if($("#uppercase").prop("checked")){
      selected.push(upperCase)
    }
    if($("#lowercase").prop("checked")){
      selected.push(lowerCase)
    }
    if($("#special-char").prop("checked")){
      selected.push(specialCharacters)
    }
    console.log(selected)
    if(selected.length > 0){
      $(this).attr('disabled', 'disabled');
    }else{
      alert('Please Select The Characters For Your Password')
      location.reload();
    }
    
  })

  $("#reset").click(function () {
    location.reload();
    })

  // $("#uppercase").change(function () {
  //   if (!selected.includes(possible.lowerCase)) {
  //     selected.push(possible.lowerCase)
  //     console.log(selected)

  //   } else {
  //     selected.splice(possible.lowerCase)
  //     console.log(selected)
  //   }
  // });
  // $("#lowercase").change(function () {
  //   if (!selected.includes(possible.upperCase)) {
  //     selected.push(possible.upperCase)
  //     console.log(selected)
  //   } else {
  //     selected.splice(possible.upperCase)
  //     console.log(selected)
  //   }
  // });
  // $("#special-char").change(function () {
  //   if (!selected.includes(possible.specialCharacters)) {
  //     selected.push(possible.specialCharacters)
  //     console.log(selected)
  //   } else {
  //     selected.splice(possible.specialCharacters)
  //     console.log(selected)
  //   }
  // });

  //generate password click handler
 


  // // Add event listener to generate button
  // generateBtn.addEventListener("click", writePassword);
  //    selected.splice(possible.upperCase)


});





























// var passwordSelected = 0;
// //--------------------------------------------------------------------------------------
// function characterSelector(){
// var hasNumbers = confirm('Click OK to include numerics');
// var hasLowerCase = confirm('Click OK to include lower case letters');
// var hasUpperCase = confirm('Click OK to include upper case letters');
// var hasSpecialCharacter = confirm('Click OK to include special characters');
// if(hasNumbers ===true){
//   alert("You selected numerics");
//   selected.push(numbers);
// } 
// if(hasLowerCase===true){
//   alert("You selected lower case letters");
//   selected.push(lowerCase);
// }
// if(hasUpperCase===true){
//   alert("You selected upper case letters");
//   selected.push(upperCase);
// }
// if(hasSpecialCharacter===true){
//   alert("You selected special characters");
//   selected.push(specialCharacters);
// } 
// }
// //-----------------------------------------------------------------------------------------
//  function lengthDecider(){
//    var passwordLength = 0;
//   while(passwordLength < 8 || passwordLength > 128){  
//    var passwordLength = parseInt(prompt("how many total characters would you like your password to contain? (8-128 characters)"));
//    } return(passwordLength);
//  }
// //------------------------------------------------------------------------------------------
//  function loopForSelection(){
//   var characters = selected.flat();
//   var chooseLength  = lengthDecider();
//   var passwordSelected = '';
//    for(var i = 0; i < chooseLength; i++){
//   passwordSelected += characters[Math.floor(Math.random() * characters.length)];
//  } password.push(passwordSelected);
//  }
// //------------------------------------------------------------------------------------------
// function generatePassword() {
//   characterSelector();   
//   loopForSelection();   
//   return password
//  }



