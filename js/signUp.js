const userName = document.getElementById("userName")
const signUpEmail = document.getElementById("signUpEmail")
const signUpPassword = document.getElementById("signUpPassword")
var signUpBtn = document.querySelector(".signUpbtn")
var signUpArr = []
var emailerror = document.querySelector(".emailerror")

// ! Add signup information 
signUpBtn.addEventListener("click", signUp)
function signUp() {
    var signUpInfo = {
        userName: userName.value,
        signUpEmail: signUpEmail.value,
        signUpPassword: signUpPassword.value,
    }
    checkEmailExist()
    if(emailIsExist){
        checkEmailExist()
    }
    else{
        signUpArr.push(signUpInfo)
            localStorage.setItem("user info", JSON.stringify(signUpArr))
            clearinputs()
    }

}

function clearinputs() {
    userName.value - ""
    signUpEmail.value - ""
    signUpPassword.value - ""
}

var emailIsExist =false
function checkEmailExist(){
    for (let i = 0; i < signUpArr.length; i++) {
        if(signUpArr[i].signUpEmail == signUpEmail.value){
            emailerror.classList.remove("d-none")
            emailIsExist=true
        }
        else if(signUpArr[i].signUpEmail !== signUpEmail.value){
            emailerror.classList.add("d-none")
            emailIsExist=false
            
        }
    }
}

var nameIsValid = false
var passIsValid = false
var emailIsValid = false
// ^ validation inputs sign up   user name
userName.addEventListener("input", function () {
    userNameValidation()
    validationInputs()
})
function userNameValidation() {
    var isvalid = /^\w{3,15}$/
    regexIsValid = isvalid.test(userName.value)
    userName.classList.toggle("is-valid", regexIsValid)
    userName.classList.toggle("is-invalid", !regexIsValid)
    if (regexIsValid) {
        nameIsValid = true
    }
    else {
        nameIsValid = false
    }
}


// ^ validation inputs sign up  user email
signUpEmail.addEventListener("input", function () {
    signUpEmailValidation()
    validationInputs()
    checkEmailExist()
})
function signUpEmailValidation() {
    var isvalid = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    regexIsValid = isvalid.test(signUpEmail.value)
    signUpEmail.classList.toggle("is-valid", regexIsValid)
    signUpEmail.classList.toggle("is-invalid", !regexIsValid)
    if (regexIsValid) {
        emailIsValid = true
    }
    else {
        emailIsValid = false
    }
}

// ^ validation inputs sign up password
signUpPassword.addEventListener("input", function () {
    signUpPasswordValidation()
    validationInputs()
})
function signUpPasswordValidation() {
    var isvalid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    regexIsValid = isvalid.test(signUpPassword.value)
    signUpPassword.classList.toggle("is-valid", regexIsValid)
    signUpPassword.classList.toggle("is-invalid", !regexIsValid)
    if (regexIsValid) {
        passIsValid = true
    }
    else {
        passIsValid = false
    }
}

function validationInputs() {
    if (nameIsValid && passIsValid && emailIsValid ) {
        signUpBtn.classList.remove("disabled")
    }
    else {
        signUpBtn.classList.add("disabled")
    }
}

