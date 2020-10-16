$(document).ready(function () {
  $('#reset').hide();
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


  $("#confirm").click(function () {
    if ($("#numbers").prop("checked")) {
      selected.push(numbers)
    }
    if ($("#uppercase").prop("checked")) {
      selected.push(upperCase)
    }
    if ($("#lowercase").prop("checked")) {
      selected.push(lowerCase)
    }
    if ($("#special-char").prop("checked")) {
      selected.push(specialCharacters)
    }
    if (selected.length > 0) {
      $(this).attr('disabled', 'disabled');
    } else {
      alert('Please Select The Characters For Your Password')
      location.reload();
    }
    $("#generate").click(function () {
      writePassword();
    })
    $("#reset").click(function () {
      location.reload();
    })
    $(".check-group").attr('disabled', 'disabled');
    $(this).prop('disabled', true)
    $('#generate').prop('disabled', false);
    $('#reset').show();
  })

  function writePassword() {
    var password = generatePassword();
    console.log(password)
    var passwordText = $("#password");
    $(passwordText).html(password)
  }

  function lengthDecider() {
    var passwordLength = 0;
    while (passwordLength < 8 || passwordLength > 128) {
      var passwordLength = parseInt(prompt("how many total characters would you like your password to contain? (8-128 characters)"));
      console.log(passwordLength)
    } return (passwordLength);
  }

  function loopForSelection() {
    var characters = selected.flat();
    console.log(characters)
    var chooseLength = lengthDecider();
    var passwordSelected = '';
    for (var i = 0; i < chooseLength; i++) {
      passwordSelected += characters[Math.floor(Math.random() * characters.length)];
    } password.push(passwordSelected);
  }
  function generatePassword() {
    loopForSelection();
    return password
  }

});

