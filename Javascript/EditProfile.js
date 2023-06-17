import { JobList } from "./JobDatabase.js";

const user = JSON.parse(localStorage.getItem("User"))
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

fillForm()

function fillForm() {
    document.querySelector(".first-name").value = user.firstName
    document.querySelector(".last-name").value = user.lastName
    document.querySelector(".email-form").value = user.email
    document.querySelector(".phone-form").value = user.phone
    document.querySelector(".dob-form").value = user.dob
    document.querySelector(".country-form").value = user.country
    document.querySelector(".profession-form").value = user.profession
    document.querySelector(".about-you-form").value = user.about

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
document.querySelector(".back-to-home").addEventListener("click", () => window.location.href = `HomePage.html`)
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
    // console.log(JSON.parse(localStorage.getItem("Users")))
    // console.log(user)
    let tmpList = JSON.parse(localStorage.getItem("Users"))
    let getIndex = tmpList.findIndex(u => u.id === user.id)
    // console.log(getIndex)
    tmpList[getIndex] = user
    console.log(tmpList)
    localStorage.setItem("Users", JSON.stringify(tmpList))
    window.history.pushState({}, '', 'loginPage.html');
    window.location.href = "loginPage.html"
})

function findJobByID(id) {
    return JobList.find(job => job.id === parseInt(id))
}

function displaySaved() {
    for (let i = 0; i < user.saved.length; i++) {
        console.log(user.saved.length)
        let job = findJobByID(parseInt(user.saved[i]))
        console.log(job)
        jobContainer.innerHTML += `
        <div class="job">
            <img class="job-img" src="${job.img}">
            <div class="job-details">

            <div class="upper-details">
                <p class="job-title ${job.id}">${job.title}</p>
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
                <button class="saved-button ${job.id} active">Saved</button>
                </div>
            </div>
            </div>
        </div>`
        navigateJobDetails()
        savedButtons()
    }
}

function displayApplied() {
    for (let i = 0; i < user.applied.length; i++) {
        let job = findJobByID(parseInt(user.applied[i]))
        jobContainer.innerHTML += `
        <div class="job">
            <img class="job-img" src="${job.img}">
            <div class="job-details">

            <div class="upper-details">
                <p class="job-title ${job.id}">${job.title}</p>
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
                <button class="cancel-button ${job.id}">CANCEL</button>
                </div>
            </div>
            </div>
        </div>`
        navigateJobDetails()
        cancelButtons()
    }
}

const savedNav = document.getElementById("saved")
const appliedNav = document.getElementById("applied")
savedNav.addEventListener("click", () => {
    jobContainer.innerHTML = ``
    if (!savedNav.classList.contains("active")) {
        savedNav.classList.add("active")
    }
    appliedNav.classList.remove("active")
    displaySaved()
})
appliedNav.addEventListener("click", () => {
    jobContainer.innerHTML = ``
    if (!applied.classList.contains("active")) {
        appliedNav.classList.add("active")
    }
    savedNav.classList.remove("active")
    displayApplied()
})

function updateSaved(data) {
    let tmp = JSON.parse(localStorage.getItem("User"))
    tmp.saved = data
    localStorage.setItem("User", JSON.stringify(tmp))
}

function savedButtons() {
    const savedButtons = document.querySelectorAll(".saved-button")
    savedButtons.forEach(savedButton => {
        savedButton.addEventListener("click", () => {
            if (savedButton.classList.contains("active")) {
                savedButton.classList.remove("active")
                savedButton.textContent = "Save"
                user.saved = user.saved.filter(element => element !== savedButton.classList[1])
                updateSaved(user.saved)
            }
            else {
                savedButton.classList.add("active")
                savedButton.textContent = "Saved"
                user.saved.push(savedButton.classList[1])
                updateSaved(user.saved)
            }
        })
    })
}

function navigateJobDetails() {
    const jobTitles = document.querySelectorAll(".job-title")
    jobTitles.forEach(title => {
        title.addEventListener("click", () => {
            window.location.href = `JobDetails.html?id=${title.classList[1]}`
        })
    })
}

function updateApplicationList(data) {
    let tmp = JSON.parse(localStorage.getItem("User"))
    tmp.applied = data
    localStorage.setItem("User", JSON.stringify(tmp))
}

function cancelButtons() {
    const cancelButtons = document.querySelectorAll(".cancel-button")
    cancelButtons.forEach(button => {
        button.addEventListener("click", e => cancelConfirmation(e, button.classList[1], button))
    })
}

function cancelConfirmation(e, jobID, DOMElement) {
    e.preventDefault()
    const job = findJobByID(jobID)
    console.log(job, jobID, DOMElement)
    const dialog = document.querySelector(".cancel-confirm")
    dialog.classList.add(jobID)
    const cancelButton = dialog.querySelector(".cancel-button")
    cancelButton.classList.add(jobID)
    dialog.querySelector(".confirm-prompt").textContent = `Cancel application to ${job.company}?`
    dialog.style.display = "flex"
    dialog.showModal()
    const backConfirm = dialog.querySelector(".back-dialog")
    const cancelConfirm = dialog.querySelector(".cancel-button")
    backConfirm.addEventListener("click", () => {
        dialog.close()
        dialog.className = "cancel-confirm"
        cancelButton.className = "cancel-button"
    })
    cancelButton.addEventListener("click", () => {
        user.applied = user.applied.filter(id => id !== cancelConfirm.classList[1])
        DOMElement.closest(".job").style.display = "none"
        updateApplicationList(user.applied)
        console.log(user.applied)
        const tmpJobs = JSON.parse(localStorage.getItem("List"))
        const tmpJob = tmpJobs.find(job => job.id == cancelConfirm.classList[1])
        const getIndex = tmpJobs.findIndex(job => job.id == cancelConfirm.classList[1])
        tmpJob.applicants = tmpJob.applicants.filter(obj => obj.id !== user.id)
        tmpJobs[getIndex] = tmpJob
        localStorage.setItem("List", JSON.stringify(tmpJobs))
        dialog.className = "cancel-confirm"
        cancelButton.className = "cancel-button"
        dialog.close()
        if (user.applied.length <= 0) {
            emptyMessage.textContent = "No Jobs Applied"
            emptyMessage.style.display = "block"
        }
    })
}