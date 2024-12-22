const signinEmail = document.getElementById("signinEmail")
const signinPassword = document.getElementById("signinPassword")
var signinBtn = document.querySelector(".signinBtn")
var signinArr = []

// ! Add signin information 
signinBtn.addEventListener("click" , signin)
function signin() {
    if(JSON.parse(localStorage.getItem("user info").includes(signinEmail.value && signinPassword.value))){
        document.getElementById("username").classList.remove("d-none")
        document.getElementById("username").classList.add("text-success")
        document.getElementById("username").innerHTML="welcome there"
    }
    else{
        document.getElementById("username").classList.remove("d-none")
        document.getElementById("username").classList.add("text-danger")
        document.getElementById("username").innerHTML="the email or password isn't correct"
    }
    
}
emailIsValid =false
passIsValid =false
// ^ validation inputs sign in  user email
signinEmail.addEventListener("input", function(){
    signinEmailValidation()
    validationInputs()
})
function signinEmailValidation() {
    var isvalid = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    regexIsValid =isvalid.test(signinEmail.value)
    signinEmail.classList.toggle("is-valid",regexIsValid)
    signinEmail.classList.toggle("is-invalid",!regexIsValid)
    if(regexIsValid){
        emailIsValid=true
    }
    else{
        emailIsValid=false
    }
}


// ^ validation inputs sign in password
signinPassword.addEventListener("input", function(){
    signinPasswordValidation()
    validationInputs()
})
function signinPasswordValidation() {
    var isvalid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    regexIsValid =isvalid.test(signinPassword.value)
    signinPassword.classList.toggle("is-valid",regexIsValid)
    signinPassword.classList.toggle("is-invalid",!regexIsValid)
    
    if(regexIsValid){
        passIsValid=true
    }
    else{
        passIsValid=false
    }
}
// ! validation inputs 
function validationInputs(){
    if( passIsValid  && emailIsValid){
        signinBtn.classList.remove("disabled")
        
        
    }
    else{
        signinBtn.classList.add("disabled")
    }
}


