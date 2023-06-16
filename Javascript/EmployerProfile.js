import { JobList } from "./JobDatabase.js";

const user = JSON.parse(localStorage.getItem("User"))
const editProfile = document.getElementById("edit-profile")
const changePass = document.getElementById("change-pass")
const logout = document.getElementById("logout")

const section1 = document.querySelector(".section-1")
const section2 = document.querySelector(".section-2")
const section3 = document.querySelector(".section-3")

const username = document.getElementById("username")
const profilePic = document.getElementById("profile-pic")

document.querySelector(".back-to-home").addEventListener("click", () => window.location.href = `EmployerPage.html`)

username.textContent = user.username
profilePic.src = user.img

fillForm()

function fillForm() {
    document.querySelector(".first-name").value = user.firstName
    document.querySelector(".last-name").value = user.lastName
    document.querySelector(".email-form").value = user.email
    document.querySelector(".phone-form").value = user.phone
    document.querySelector(".dob-form").value = user.dob
    document.querySelector(".country-form").value = user.country

    document.querySelector(".address-1").value = user.address.street1
    document.querySelector(".address-2").value = user.address.street2
    document.querySelector(".address-3").value = user.address.street3
    document.querySelector(".unit-number").value = user.address.unit
    document.querySelector(".province").value = user.address.province
    document.querySelector(".city").value = user.address.city
    document.querySelector(".zip-code").value = user.address.zip
}

const profileForm = document.getElementById("profile-form")
const addressForm = document.getElementById("address-form")

function updateUserDetails(...args) {
    user.firstName = args[0]
    user.lastName = args[1]
    user.email = args[2]
    user.phn = args[3]
    user.country = args[4]
    user.profession = args[5]
    user.about = args[6]
    console.log(user)
    localStorage.setItem("User", JSON.stringify(user))
}

profileForm.addEventListener("submit", (e) => {
    const firstName = document.querySelector(".first-name").value
    const lastName = document.querySelector(".last-name").value
    const email = document.querySelector(".email-form").value
    const phn = document.querySelector(".phone-form").value
    const country = document.querySelector(".country-form").value
    const profession = document.querySelector(".profession-form").value
    const about = document.querySelector(".about-you-form").value
    updateUserDetails(firstName, lastName, email, phn, country, profession, about)
})

editProfile.addEventListener("click", () => {
    editProfile.classList.add("prime")
    changePass.classList.remove("prime")
    section1.style.display = "block"
    section2.style.display = "none"
    section3.style.display = "none"
})
changePass.addEventListener("click", () => {
    changePass.classList.add("prime")
    editProfile.classList.remove("prime")
    section2.style.display = "block"
    section1.style.display = "none"
    section3.style.display = "none"
})
logout.addEventListener("click", () => {
    window.history.pushState({}, '', 'loginPage.html');
    window.location.href = "loginPage.html"
})