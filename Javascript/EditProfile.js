import { JobList } from "./JobDatabase.js";

const user = JSON.parse(localStorage.getItem("User"))
console.log(user)
const editProfile = document.getElementById("edit-profile")
const changePass = document.getElementById("change-pass")
const trackJobs = document.getElementById("track-jobs")
const logout = document.getElementById("logout")

const section1 = document.querySelector(".section-1")
const section2 = document.querySelector(".section-2")
const section3 = document.querySelector(".section-3")

const username = document.getElementById("username")
const profilePic = document.getElementById("profile-pic")

const jobContainer = document.querySelector(".job-container")

username.textContent = user.username
profilePic.src = user.img

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

fillForm()

editProfile.addEventListener("click", () => {
    editProfile.classList.add("prime")
    changePass.classList.remove("prime")
    trackJobs.classList.remove("prime")
    section1.style.display = "block"
    section2.style.display = "none"
    section3.style.display = "none"
})
changePass.addEventListener("click", () => {
    changePass.classList.add("prime")
    editProfile.classList.remove("prime")
    trackJobs.classList.remove("prime")
    section2.style.display = "block"
    section1.style.display = "none"
    section3.style.display = "none"
})
trackJobs.addEventListener("click", () => {
    jobContainer.innerHTML = ``
    displaySaved()
    trackJobs.classList.add("prime")
    editProfile.classList.remove("prime")
    changePass.classList.remove("prime")
    section3.style.display = "block"
    section2.style.display = "none"
    section1.style.display = "none"
})
logout.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "loginPage.html"
})

console.log(user)
console.log(user.applied[0])

function findJobByID(id) {
    return JobList.find(job => job.id === id)
}

function displaySaved() {
    for (let i = 0; i < user.saved.length; i++) {
        let job = findJobByID(user.saved[i])
        jobContainer.innerHTML += `
        <div class="job">
            <img class="job-img" src="${job.img}">
            <div class="job-details">

            <div class="upper-details">
                <p class="job-title">${job.title}</p>
                <div class="upper-right-details">
                <p class="date-posted">${job.date}</p>
                <img src="assets/people-icon.png" class="people-icon">
                <p class="company-size">${job.size}</p>
                </div>
            </div>

            <p class="company-name">${job.company}</p>
            <p class="salary-range">Rp${job.salaryStart.toLocaleString()} - Rp${job.salaryEnd.toLocaleString()}</p>

            <div class="level-container">
                <p class="experience-level">${job.level}</p>
                <p class="job-type">${job.type}</p>
                <p class="onsite-remote">${job.site}</p>
            </div>

            <div class="lower-details">
                <div class="location-container">
                <img src="assets/location-icon.png" class="location-icon">
                <p class="job-location">${job.location}</p>
                </div>
                <div class="button-container-2">
                <button class="apply-button">Apply</button>
                <button class="saved-button">Saved</button>
                </div>
            </div>
            </div>
        </div>`
    }
}

function displayApplied() {
    for (let i = 0; i < user.applied.length; i++) {
        let job = findJobByID(user.applied[i])
        jobContainer.innerHTML += `
        <div class="job">
            <img class="job-img" src="${job.img}">
            <div class="job-details">

            <div class="upper-details">
                <p class="job-title">${job.title}</p>
                <div class="upper-right-details">
                <p class="date-posted">${job.date}</p>
                <img src="assets/people-icon.png" class="people-icon">
                <p class="company-size">${job.size}</p>
                </div>
            </div>

            <p class="company-name">${job.company}</p>
            <p class="salary-range">Rp${job.salaryStart.toLocaleString()} - Rp${job.salaryEnd.toLocaleString()}</p>

            <div class="level-container">
                <p class="experience-level">${job.level}</p>
                <p class="job-type">${job.type}</p>
                <p class="onsite-remote">${job.site}</p>
            </div>

            <div class="lower-details">
                <div class="location-container">
                <img src="assets/location-icon.png" class="location-icon">
                <p class="job-location">${job.location}</p>
                </div>
                <div class="button-container-2">
                <button class="applied-button">APPLIED</button>
                <button class="save-button">Save</button>
                </div>
            </div>
            </div>
        </div>`
    }
}

document.getElementById("saved").addEventListener("click", () => {
    jobContainer.innerHTML = ``
    displaySaved()
})
document.getElementById("applied").addEventListener("click", () => {
    jobContainer.innerHTML = ``
    displayApplied()
})
