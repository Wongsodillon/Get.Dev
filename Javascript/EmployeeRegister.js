import { createValidate } from "./FormValidation.js"
import { personalValidate } from "./FormValidation.js"
import { users } from "./UserDatabase.js"
import { addUser } from "./UserDatabase.js"

localStorage.setItem("UserList", JSON.stringify(users))

const form1 = document.getElementById("form1")
const form2 = document.getElementById("form2")
const form3 = document.getElementById("form3")

const next1 = document.getElementById("next1")
const back1 = document.getElementById("back1")
const next2 = document.getElementById("next2")
const back2 = document.getElementById("back2")
const signIn = document.getElementById("signin")
const submit = document.getElementById("employeeSubmit")

let username, password, confirm, first, last, email, phn, country;
let dob = new Date()
let err = document.querySelectorAll(".err")

next1.addEventListener("click", e => {
    e.preventDefault()
    username = document.getElementById("username").value
    password = document.getElementById("password").value
    confirm = document.getElementById("confirm").value
    // let validate = createValidate(username, password, confirm)
    // if (validate == false) {
    //     return
    // }
    form1.style.display = "none"
    form2.style.display = "flex"
})
back1.addEventListener("click", e => {
    e.preventDefault()
    form1.style.display = "flex"
    form2.style.display = "none"
})
next2.addEventListener("click", e => {
    e.preventDefault()
    first = document.getElementById("first").value
    last = document.getElementById("last").value
    email = document.getElementById("email").value
    phn = document.getElementById("phn").value
    country = document.getElementById("country").value
    dob = document.getElementById("dob").value.trim()
    // let validate = personalValidate(first,last,email,phn,country,dob)
    // if (validate === false) {
    //     return
    // }
    // console.log(first, last, email, phn, country, dob)
    form2.style.display = "none"
    form3.style.display = "flex"
})
back2.addEventListener("click", e => {
    e.preventDefault()
    form2.style.display = "flex"
    form3.style.display = "none"
})
signIn.addEventListener("click", () => {
    window.location.href = "loginPage.html"
})
submit.addEventListener("click", e => {
    e.preventDefault()
    let id = (users.length + 1).toString()
    console.log(id)
    // let tmp = [id, username,password,"employee",first,last, email,phn, country,dob]
    // addUser(...tmp)
    // console.log(users)
    window.location.href = `loginPage.html`;
})