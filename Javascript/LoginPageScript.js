import { loginValidate } from "./FormValidation.js"
const signup = document.querySelector(".sign-up").onclick = () => {
    window.location.href = "register.html"
}  
const login = document.querySelector(".login-btn")
login.addEventListener("click", loginValidate)