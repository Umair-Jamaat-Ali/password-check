////write a js program, that take password as html input and password should ensure following rules:
//// Alteast 8 char
//// Atleat contain one capital letter
/// Atleast contain one smaal letter
//// Atleast contain one digit



function passwordCheck() {
    var inputPassword = document.getElementById("password").value;

    if(inputPassword.length < 8){
        alert("Password is invalid , Please enter atleast 8 digits ");
        return
    }

var isCapitalChar = false
var isLowerChar = false

for (let index = 0; index < inputPassword.length; index++) {
    const char = inputPassword[index];
    if(char >= "A" || char <= "Z"){
        isCapitalChar = true
    }

    if(char >= "a" || char <= "z"){
        isLowerChar = true
    }  
}

    if (!isCapitalChar) {
        alert("invalid password- does not contain any capital letter");
        return
    }

    if (!isLowerChar) {
        alert("invalid password- does not contain any small letter");
        return
    }

        alert("Password is valid");

    var resultShow = document.getElementById("result");
    resultShow.textContent = result;

};