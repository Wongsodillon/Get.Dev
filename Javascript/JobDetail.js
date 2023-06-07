import { JobList } from "./JobDatabase.js";

const urlParams = new URLSearchParams(window.location.search);
const JobId = urlParams.get('id')
const job = JobList.find(jobs => jobs.id === parseInt(JobId))

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

const req = document.getElementById("req")
for (let i = 0; i < job.jobDetail.req.length; i++) {
    let reqContent = document.createElement("li")
    reqContent.textContent = job.jobDetail.req[i]
    req.append(reqContent)
}

const desc = document.getElementById("desc")
for (let i = 0; i < job.jobDetail.desc.length; i++) {
    let descContent = document.createElement("li")
    descContent.textContent = job.jobDetail.desc[i]
    desc.append(descContent)
}

let saveChecked = false
const saveButtons = document.querySelectorAll(".save-button")
saveButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (saveChecked === false) {
            button.style.backgroundColor = "#fafafa"
            button.style.color = "#101010"
            button.textContent = "Saved"
            button.style.border = "1px solid #9b9b9b"
            saveChecked = true
        }
        else {
            button.style.backgroundColor = "#101010"
            button.style.color = "#fafafa"
            button.textContent = "Save"
            saveChecked = false
        }
    })
})