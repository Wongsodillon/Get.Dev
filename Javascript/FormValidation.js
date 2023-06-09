import { users } from "./UserDatabase.js"

const userExists = user => {
    let exists = false
    users.forEach(u => {
        if (u.username === user) {
            exists = true
        }
    });
    return exists
}

const validatePassword = pass => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/
    return alphanumericRegex.test(pass)
}

export const createValidate = (user, pass, confirm) => {
    const form = document.getElementById("form1")
    const err = form.querySelectorAll(".err")
    let invalid = false
    if (user.length < 4) {
        err[0].textContent = "Username must more than 4 characters"
        err[0].style.display = "block"
        invalid = true
    }
    else if (userExists(user) === true) {
        err[0].textContent = "Username Exists"
        err[0].style.display = "block"
        invalid = true
    }
    else err[0].style.display = "none"
    if (pass.length <= 7) {
        err[1].textContent = "Password must be at least 7 characters"
        err[1].style.display = "block"
        invalid = true
    }
    else if (validatePassword(pass) === false) {
        err[1].textContent = "Password must alphanumeric"
        err[1].style.display = "block"
        invalid = true
    }
    else err[1].style.display = "none"
    if (confirm !== pass) {
        err[2].textContent = "Password not the same"
        err[2].style.display = "block"
        invalid = true
    }
    else err[2].style.display = "none"

    if (invalid === true) return false
}

const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

const validatePhone = phn => {
    const phoneRegex = /^\d{9,}$/;
    return phoneRegex.test(phn)
}

export const personalValidate = (first,last,email,phn,country,dob) => {
    const form = document.getElementById("form2")
    const err = form.querySelectorAll(".err")
    let invalid = false
    if (first.length == 0 && last.length == 0) {
        err[0].textContent = "Name can not be empty"
        err[0].style.display = "block"
        invalid = true
    }
    else err[0].style.display = "none"
    if (email.length == 0) {
        err[1].textContent = "Email can not be empty"
        err[1].style.display = "block"
        invalid = true
    }
    else if (validateEmail(email) === false) {
        err[1].textContent = "Email format: yourname@example.com"
        err[1].style.display = "block"
        invalid = true
    }
    else err[1].style.display = "none"
    if (validatePhone(phn) === false) {
        err[2].textContent = "Invalid Phone Number"
        err[2].style.display = "block"
        invalid = true
    }
    else err[2].style.display = "none"
    if (country.length == 0) {
        err[3].textContent = "Enter a country"
        err[3].style.display = "block"
        invalid = true
    }
    else err[3].style.display = "none"
    if (dob === "") {
        err[4].textContent = "Enter your Date of Birth"
        err[4].style.display = "block"
        invalid = true
    }
    else err[4].style.display = "none"
    if (invalid === true) return false
}
