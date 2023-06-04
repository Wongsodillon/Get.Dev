import { users } from "./UserDatabase.js";
import { JobList } from "./JobDatabase.js";

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id')
const user = users.find(user => user.id === userId)
const username = document.querySelector(".username")
username.textContent = user.username

const arrows = document.querySelectorAll(".arrow-check")
arrows.forEach(arrow => {
    arrow.addEventListener("change", () => {
        const title = arrow.closest("header")
        const filters = arrow.closest(".filter").querySelectorAll(".filter-container")
        if (arrow.checked) {
            filters.forEach(filter => {
                filter.style.display = "none"
                title.style.marginBottom = "1rem"
            })
        }
        else {
            filters.forEach(filter => {
                filter.style.display = ""
                title.style.marginBottom = ""
            })
        }
    })
})

const list = document.querySelector(".job-list")

for (let i = 0; i < JobList.length; i++) {
    let job = document.createElement("div")
    job.classList.add("job")

    let jobImg = document.createElement("img")
    jobImg.src = JobList[i].img
    jobImg.classList.add("job-img")

    let jobDetails = document.createElement("div")
    jobDetails.classList.add("job-details")

    let upperDetails = document.createElement("div")
    upperDetails.classList.add("upper-details")

    let jobTitle = document.createElement("p")
    jobTitle.textContent = JobList[i].title
    jobTitle.classList.add("job-title")
    
    let upperRight = document.createElement("div")
    upperRight.classList.add("upper-right-details")

    let datePosted = document.createElement("p")
    datePosted.classList.add("date-posted")
    datePosted.textContent = JobList[i].date
    let peopleIcon = document.createElement("img")
    peopleIcon.src = "assets/people-icon.png"
    peopleIcon.classList.add("people-icon")
    let companySize = document.createElement("p")
    companySize.classList.add("company-size")
    companySize.textContent = JobList[i].size

    upperRight.append(datePosted, peopleIcon, companySize)

    upperDetails.append(jobTitle, upperRight)

    let companyName = document.createElement("p")
    companyName.textContent = JobList[i].company
    companyName.classList.add("company-name")
    let salaryRange = document.createElement("p")
    salaryRange.textContent = "Rp" + (JobList[i].salaryStart).toLocaleString("en") + " - Rp" 
    + (JobList[i].salaryEnd).toLocaleString("en") 
    salaryRange.classList.add("salary-range")

    let levelContainer = document.createElement("div")
    levelContainer.classList.add("level-container")

    let experience = document.createElement("p")
    experience.textContent = JobList[i].level
    experience.classList.add("experience-level")
    let jobType = document.createElement("p")
    jobType.textContent = JobList[i].type
    jobType.classList.add("job-type")
    let sites = document.createElement("p")
    sites.textContent = JobList[i].site
    sites.classList.add("onsite-remote")

    levelContainer.append(experience,jobType,sites)

    let lowerDetails = document.createElement("div")
    lowerDetails.classList.add("lower-details")

    let locationContainer = document.createElement("div")
    locationContainer.classList.add("location-container")

    let locationIcon = document.createElement("img")
    locationIcon.src = "assets/location-icon.png"
    locationIcon.classList.add("location-icon")
    let jobLocation = document.createElement("p")
    jobLocation.textContent = JobList[i].location
    jobLocation.classList.add("job-location")
    locationContainer.append(locationIcon, jobLocation)

    let buttonContainer = document.createElement("div")
    buttonContainer.classList.add("button-container")

    let applyButton = document.createElement("button")
    applyButton.textContent = "Apply"
    applyButton.classList.add("apply-button")
    let saveButton = document.createElement("button")
    saveButton.textContent = "Save"
    saveButton.classList.add("save-button")
    buttonContainer.append(applyButton, saveButton)
    lowerDetails.append(locationContainer, buttonContainer)

    jobDetails.append(upperDetails, companyName, salaryRange, levelContainer, lowerDetails)
    job.append(jobImg,jobDetails)
    list.append(job)
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