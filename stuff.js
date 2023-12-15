const loginForm = document.getElementById("loginForm");
const username = loginForm['name']
const password = loginForm['password']

const logins = [];

const addlogin = (user, password)














































//Opens Home page
function work(){ 
    window.location.href = "home.html";
    }
document.getElementById("Signin").addEventListener("click", function () {
// Password
var L = "lukas";
var F = "1";

//User's inputs and Error
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var error = document.querySelector(".error");

//Checks Username and Password 
if (username == "" || password == "") {
    error.innerHTML = "Username or password is empty";
    error.removeAttribute("hidden");
} else if (username !== L || password !== F) {
    error.innerHTML = "Username/Password is Incorrect"
    error.removeAttribute("hidden");
}else {
    error.innerHTML = "";
    work()
}

});