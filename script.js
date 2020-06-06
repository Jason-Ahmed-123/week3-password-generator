// Assignment code here


// Variables for possible password characters:

// Special characters 
var character = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

// Numeric characters
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lowercase letters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase letters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Start function to generate password

// Password length:
function generatePassword() {
    var length = (prompt("how many characters would you like in your password? Choose between 8 and 128."));

    // If user does not select value:
    if (!length) {
        alert("This needs a value");
    }

    // If user inputs value outside of parameters:
    else if (length < 8 || length > 128) {
        alert("This needs a value between 8 and 128!");
    }


    // After correct number of characters has been input, pop-up question "confirm" dialog boxes:
    else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain uppercase letters?");
        confirmLowercase = confirm("Will this contain lowercase letters?");
    };

    // this variable is to create an empty array to hold all possible options:
    var possibleChars = []

    // This variable will generate the password randomly:
    var result = []

    // For 4 negatives:
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    }

    // For 4 positive options:
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        possibleChars = character.concat(number, lowercase, uppercase);
        console.log("possible characters are " + possibleChars)
    }

    // Else if for 3 positive options:
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        possibleChars = character.concat(number, uppercase);
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        possibleChars = character.concat(number, lowercase);
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        possibleChars = character.concat(lowercase, uppercase);
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        possibleChars = number.concat(lowercase, uppercase);
        console.log("possible characters are " + possibleChars)
    }

    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        possibleChars = character.concat(number);
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmCharacter && confirmLowercase) {
        possibleChars = character.concat(lowercase);
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmCharacter && confirmUppercase) {
        possibleChars = character.concat(uppercase);
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmLowercase && confirmNumber) {
        possibleChars = lowercase.concat(number);
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmLowercase && confirmUppercase) {
        possibleChars = lowercase.concat(uppercase);
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmNumber && confirmUppercase) {
        possibleChars = number.concat(uppercase);
        console.log("possible characters are " + possibleChars)
    }

    // Else if for 1 positive option
    else if (confirmCharacter) {
        possibleChars = character;
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmNumber) {
        possibleChars = number;
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmLowercase) {
        possibleChars = lowercase;
        console.log("possible characters are " + possibleChars)
    }
    else if (confirmUppercase) {
        possibleChars = uppercase;
        console.log("possible characters are " + possibleChars)
    }


    //Use a for loop (length is the number the user chose for the password)

    // this is the moment you get back the info to the variable password that calls the function
    // push selected-number random items from possibleChars array into the results array using math.random to choose random index


    console.log(length)

    // Random selection for all variables: 
    for (var i = 0; i < length; i++) {
        var pickpossibleChars = possibleChars[Math.floor(Math.random() * possibleChars.length)];
        result.push(pickpossibleChars);
    }
    // Use "join()" to convert elements into a string:
    var password = result.join("");
    console.log(password);
    return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword()

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











