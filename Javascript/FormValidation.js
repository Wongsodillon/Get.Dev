import { users } from "./UserDatabase.js"
import { setUser } from "./UserDatabase.js"
import { user } from "./UserDatabase.js";

console.log(users);

const validateCredentials = (email, password) => {
    return new Promise((resolve, reject) => {
        const credentials = users.find(
          (user) => user.email === email || user.username === email
        );
        if (credentials == null) {
          resolve(null);
        } else if (password === credentials.password) {
          resolve(credentials);
        } else {
          resolve(false);
        }
    });
}

export const loginValidate = e => {
    e.preventDefault()
    const emailForm = document.getElementById("email")
    const passwordForm = document.getElementById("password")
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const message = document.getElementById("error")
    if (email.length == 0 || password.length == 0) {
        message.textContent = "Field is empty"
    }
    else if (validateCredentials(email, password) == null) {
        message.textContent = "Username does not exist"
    }
    else if (validateCredentials(email, password) == false) {
        message.textContent = "Incorrect password"
    }
    else {
        validateCredentials(email, password)
        .then((userData) => {
        if (userData == null) {
          message.textContent = "Username does not exist";
        } else if (userData === false) {
          message.textContent = "Incorrect password";
        } else {
          setUser(userData);
          console.log(user);
          window.location.href = `HomePage.html?id=${user.id}`;
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    const error = document.querySelector(".error-message")
    error.style.transform = "translateY(0)"
    setTimeout(() => {
      error.style.transform = "translateY(-150%)"
    }, 4000)
}

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
