const button = document.getElementById("button")
const inputPassword = document.getElementById("password")
const copy = document.getElementById("copy")

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbles = "~!@#$%^&*()_-+={[}]|:;'<,>.?/";

let allChars = upperCase + number + lowerCase + symbles;

function getRandomPass(){
    let result = "";
    result = result + upperCase[Math.floor(Math.random() * upperCase.length)]
    result = result + number[Math.floor(Math.random() * number.length)]
    result = result + lowerCase[Math.floor(Math.random() * lowerCase.length)]
    result = result + symbles[Math.floor(Math.random() * symbles.length)]
    
    while(result.length < 12){
        result = result + allChars[Math.floor(Math.random() * allChars.length)]
        
    }
    inputPassword.value = result
}

button.addEventListener("click", getRandomPass)

copy.addEventListener("click", passwordCopy)

function passwordCopy(){
    inputPassword.select()
    document.execCommand("copy")
}



















// const inputPassword = document.getElementById("password")
// const button = document.getElementById("button")


// let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let lowerCase = "abcdefghijklmnopqrstuvwxyz"

// let number = "0123456789"
// let symbles = "~!@#$%^&*()_-+={[}]|:;'<,>.?/";

// let length = 8;

// let allChars = upperCase + lowerCase + number + symbles;

// function randomPassword(){
//     let password = ""
//     password = password + upperCase[Math.floor(Math.random() * upperCase.length)]
//     password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)]
//     password = password + number[Math.floor(Math.random() * number.length)]
//     password = password + symbles[Math.floor(Math.random() * symbles.length)];
    
//     while(12 > password.length){
//         password = password + allChars[Math.floor(Math.random() * allChars.length)];
//     }
//     inputPassword.value = password
// }

// function copyText(){
//     inputPassword.select()
//     document.execCommand("copy")
// }

// randomPassword()