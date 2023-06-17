import { JobList } from "./JobDatabase.js";

const user = JSON.parse(localStorage.getItem("User"))
const usernameText = document.querySelector(".username").textContent = user.username
const profilePic = document.getElementById("profile-pic").src = user.img

const Jobs = JSON.parse(localStorage.getItem("List"))

const urlParams = new URLSearchParams(window.location.search);
const JobId = urlParams.get('id')
const job = Jobs.find(jobs => jobs.id === parseInt(JobId))

const jobImg = document.querySelector(".job-img")
const jobTitle = document.querySelector(".job-title")
const companyName = document.querySelector(".company-name")
const jobLocation = document.querySelector(".job-location")
const jobType = document.querySelector(".job-type")
const jobLevel = document.querySelector(".job-level")
const jobSalary = document.querySelector(".job-salary")
const jobPosted = document.querySelector(".job-posted")

jobImg.src = job.img
jobTitle.textContent = job.title
companyName.textContent = job.company
jobLocation.textContent = job.location
jobType.textContent = job.type
jobLevel.textContent = job.level
jobSalary.textContent = `Rp ${job.salaryStart.toLocaleString()} - Rp ${job.salaryEnd.toLocaleString()}`
jobPosted.textContent = `Posted on ${job.date}`

document.querySelector(".back-icon").addEventListener("click", () => window.location.href = `HomePage.html`)

const navigateEditProfile = () => window.location.href = `EditProfile.html`
document.getElementById("profile-pic").addEventListener("click", navigateEditProfile)
document.querySelector(".username").addEventListener("click", navigateEditProfile)

generateRequirements()

function generateRequirements() {
    const req = document.getElementById("req")
    if (Array.isArray(job.jobDetail.req)) {
        for (let i = 0; i < job.jobDetail.req.length; i++) {
            let reqContent = document.createElement("li")
            reqContent.textContent = job.jobDetail.req[i]
            req.style.padding = ""
            req.append(reqContent)
        }
    }
    else if (typeof job.jobDetail.req === "string") {
        const reqText = document.createElement("p")
        reqText.textContent = job.jobDetail.req
        req.style.padding = "0"
        req.append(reqText)
    }
}

const desc = document.getElementById("desc")
if (Array.isArray(job.jobDetail.desc)) {
    for (let i = 0; i < job.jobDetail.desc.length; i++) {
        let descContent = document.createElement("li")
        descContent.textContent = job.jobDetail.desc[i]
        desc.append(descContent)
    }
}
else if (typeof job.jobDetail.desc === "string") {
    const descText = document.createElement("p")
    descText.textContent = job.jobDetail.desc
    desc.style.padding = "0"
    desc.append(descText)
}

const about = document.getElementById("about")
let aboutContent = document.createElement("p")
aboutContent.textContent = job.jobDetail.about
aboutContent.classList.add("about-content")
about.append(aboutContent)

const saveButton = document.querySelector(".save-button")
console.log(saveButton)
if (user.saved.indexOf(JobId + '') != -1) {
    saveButton.classList.add("active")
    saveButton.textContent = "Saved"
}
else {
    saveButton.textContent = "Save"
}
if (user.applied.indexOf(JobId + '') != -1) {
    document.querySelector(".apply-button").classList.add("applied")
    document.querySelector(".apply-button").textContent = "APPLIED"
}
function updateSaved(data) {
    const tmp = JSON.parse(localStorage.getItem("User"))
    tmp.saved = data
    console.log(tmp)
    localStorage.setItem("User", JSON.stringify(tmp))
}

const saveButtons = document.querySelectorAll(".save-button")
saveButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("active")) {
            button.textContent = "Save"
            button.classList.remove("active")
            user.saved = user.saved.filter(element => element !== JobId)
            console.log(user.saved)
            updateSaved(user.saved)
        }
        else {
            button.classList.add("active")
            button.textContent = "Saved"
            user.saved.push(JobId)
            updateSaved(user.saved)
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const applyButton = document.querySelector('.apply-button');
    const cancelButton = document.querySelector('.cancel-button');
    const apply = document.querySelector(".apply-job-button")
    if (!applyButton.classList.contains("active")) {
        applyButton.addEventListener('click', applyJob)
    }
    cancelButton.addEventListener('click', closeApply);
    apply.addEventListener("click", submitApplication)
});

function applyJob(e) {
    e.preventDefault();
    const apply = document.getElementById('application')
    apply.classList.add("active")
    apply.showModal();
}

function closeApply(e) {
    e.preventDefault();
    const apply = document.getElementById('application');
    apply.classList.remove("active")
    apply.close();
}

function updateApplicantPool() {
    console.log(job.applicants)
    job.applicants.push(user)
    console.log(job.applicants)
    const tmpJobs = JSON.parse(localStorage.getItem("List"))
    const getIndex = tmpJobs.findIndex(job => job.id == JobId)
    tmpJobs[getIndex] = job
    localStorage.setItem("List", JSON.stringify(tmpJobs))
    console.log(JSON.parse(localStorage.getItem("List")))
}

function submitApplication(e) {
    e.preventDefault()
    const apply = document.getElementById("application")
    apply.classList.remove("active")
    apply.close()
    user.applied.push(JobId)
    console.log(user.applied)
    let tmp = JSON.parse(localStorage.getItem("User"))
    tmp.applied = user.applied
    localStorage.setItem("User", JSON.stringify(tmp))
    document.querySelector(".apply-button").classList.add("applied")
    document.querySelector(".apply-button").textContent = "APPLIED"
    document.querySelector(".apply-button").removeEventListener("click", applyJob)
    updateApplicantPool()
}