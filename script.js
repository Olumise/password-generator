let passwordText = document.querySelector("#secret-password")
let lengthInput = document.querySelector("#pw-length").defaultValue
console.log(lengthInput)

// let length = 8

const passwordCharacters = [
    // Uppercase letters
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    
    // Lowercase letters
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

    // Numbers
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',

    // Special characters
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', 
    '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', 
    '?', '/', '`', '~'
];

// lengthInput.value = 8;

function setText(){
   
   passwordText.textContent = ""
    for ( i=0; i<lengthInput; i++){
        let passwordNum = Math.floor(Math.random()*passwordCharacters.length)
passwordText.textContent += passwordCharacters[passwordNum]
    }
}