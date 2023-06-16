import { users } from "./UserDatabase.js"

console.log(users)

document.querySelector(".sign-up").onclick = () => {
    window.location.href = "register.html"
}  

const validateCredentials = (email, password) => {
    const credentials = users.find(user => user.email === email || user.username === email)
    console.log(credentials)
    if (credentials === undefined) return null
    else if (String(credentials.password) !== String(password)) return false
    else if (String(credentials.password)=== String(password)) return credentials
}

const loginValidate = e => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const message = document.getElementById("error")
    if (email.length == 0 || password.length == 0) {
        message.textContent = "Field is empty"
    }
    else if (validateCredentials(email, password) === null) {
        message.textContent = "Username does not exist"
    }
    else if (validateCredentials(email, password) === false) {
        message.textContent = "Incorrect password"
    }
    else {
        const result = validateCredentials(email,password)
        if (result == null) {
            message.textContent = "Username does not exist";
        } else if (result === false) {
            message.textContent = "Incorrect password";
        } else if (result) {
            sessionStorage.clear()
            localStorage.clear()
            localStorage.setItem("User", JSON.stringify(result))
            if (result.role === "employer") window.location.href = `EmployerPage.html`
            else {
                window.location.href = `HomePage.html`
            }
            return
        }
    }
    const error = document.querySelector(".error-message")
    error.style.transform = "translateY(0)"
    setTimeout(() => {
        error.style.transform = "translateY(-150%)"
    }, 4000)
}
document.querySelector(".login-btn").addEventListener("click", loginValidate)