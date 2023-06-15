import { JobList } from "./JobDatabase.js";

const paginationContainer = document.getElementById("pagination-container")
const itemsPerPage = 5
if (sessionStorage.getItem("List") === null) {
    sessionStorage.setItem("List", JSON.stringify(JobList))
}
if (sessionStorage.getItem("CurrentPage") === null) {
    sessionStorage.setItem("CurrentPage", "1")
}
let lists = JSON.parse(sessionStorage.getItem("List"))
const user = JSON.parse(localStorage.getItem("User"))
displayJobs()
generatePaginations()
pageButtonGeneration()

let randomNumber = Math.floor(Math.random() * 9000) + 1000;
const username = document.querySelector(".username")
const profilePic = document.getElementById("profile-pic")
if (user !== undefined) {
    username.textContent = user.username
    profilePic.src = user.img
}
else {
    profilePic.src = "assets/dummy-profile.webp"
    username.textContent = "user" + randomNumber
}

const arrows = document.querySelectorAll(".arrow-check")
const tmpFilter = document.querySelectorAll(".filter-container")
tmpFilter.forEach(filter => {
    filter.style.display = ""
    filter.style.marginBottom = ""
})
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

function updateSaved(data) {
    const tmp = JSON.parse(localStorage.getItem("User"))
    tmp.saved = data
    console.log(tmp)
    localStorage.setItem("User", JSON.stringify(tmp))
}

function saveButtons() {
    const saveButtons = document.querySelectorAll(".save-button")
    saveButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("active")) {
            button.classList.remove("active")
            button.textContent = "Save"
            user.saved = user.saved.filter(element => element !== button.classList[1])
            updateSaved(user.saved)
        }
        else {
            button.textContent = "Saved"
            button.classList.add("active")
            user.saved.push(button.classList[1])
            updateSaved(user.saved)
        }
    })
})}

function titleNavigate() {
    let titles = document.querySelectorAll(".job-title")
    titles.forEach(title => {
        title.addEventListener("click", () => {
            const JobID = title.classList[1]
            window.location.href = `JobDetails.html?id=${JobID}`
        })
    })
}

function applyNavigate() {
    let applies = document.querySelectorAll(".apply-button")
    applies.forEach(apply => {
        if (user.applied.indexOf(apply.classList[1] + '') != -1) apply.classList.add("applied")
        apply.addEventListener("click", () => {
            const JobID = apply.classList[1]
            window.location.href = `JobDetails.html?id=${JobID}`
        })
    })
}

function displayJobs() {
    lists = JSON.parse(sessionStorage.getItem("List"))
    const list = document.querySelector(".job-list")
    let currentPage = parseInt(sessionStorage.getItem("CurrentPage"))
    console.log(currentPage)
    for (let i = (currentPage-1) * itemsPerPage; i < ((currentPage-1) * itemsPerPage)+ itemsPerPage; i++) {
        let job = document.createElement("div")
        job.classList.add("job")
        let jobImg = document.createElement("img")
        jobImg.src = lists[i].img
        jobImg.classList.add("job-img")
    
        let jobDetails = document.createElement("div")
        jobDetails.classList.add("job-details")
    
        let upperDetails = document.createElement("div")
        upperDetails.classList.add("upper-details")
    
        let jobTitle = document.createElement("p")
        jobTitle.textContent = lists[i].title
        jobTitle.classList.add("job-title")
        jobTitle.classList.add(lists[i].id)
        
        let upperRight = document.createElement("div")
        upperRight.classList.add("upper-right-details")
    
        let datePosted = document.createElement("p")
        datePosted.classList.add("date-posted")
        datePosted.textContent = lists[i].date
        let peopleIcon = document.createElement("img")
        peopleIcon.src = "assets/people-icon.png"
        peopleIcon.classList.add("people-icon")
        let companySize = document.createElement("p")
        companySize.classList.add("company-size")
        companySize.textContent = lists[i].size
    
        upperRight.append(datePosted, peopleIcon, companySize)
    
        upperDetails.append(jobTitle, upperRight)
    
        let companyName = document.createElement("p")
        companyName.textContent = lists[i].company
        companyName.classList.add("company-name")
        let salaryRange = document.createElement("p")
        salaryRange.textContent = "Rp " + (lists[i].salaryStart).toLocaleString("en") + " - Rp " 
        + (lists[i].salaryEnd).toLocaleString("en") 
        salaryRange.classList.add("salary-range")
    
        let levelContainer = document.createElement("div")
        levelContainer.classList.add("level-container")
    
        let experience = document.createElement("p")
        experience.textContent = lists[i].level
        experience.classList.add("experience-level")
        let jobType = document.createElement("p")
        jobType.textContent = lists[i].type
        jobType.classList.add("job-type")
        let sites = document.createElement("p")
        sites.textContent = lists[i].site
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
        jobLocation.textContent = lists[i].location
        jobLocation.classList.add("job-location")
        locationContainer.append(locationIcon, jobLocation)
    
        let buttonContainer = document.createElement("div")
        buttonContainer.classList.add("button-container")
    
        let applyButton = document.createElement("button")
        applyButton.textContent = "Apply"
        applyButton.classList.add("apply-button")
        applyButton.classList.add(lists[i].id)
        if (user.applied.indexOf(lists[i].id + '') != -1) {
            applyButton.classList.add("applied")
            applyButton.textContent = "APPLIED"
        }
        else {
            applyButton.textContent = "Apply"
        }
        let saveButton = document.createElement("button")
        saveButton.classList.add("save-button")
        saveButton.classList.add(lists[i].id)
        if (user.saved.indexOf(lists[i].id + '') != -1) {
            saveButton.classList.add("active")
            saveButton.textContent = "Saved"
        }
        else {
            saveButton.textContent = "Save"
        }
        buttonContainer.append(applyButton, saveButton)
        lowerDetails.append(locationContainer, buttonContainer)
    
        jobDetails.append(upperDetails, companyName, salaryRange, levelContainer, lowerDetails)
        job.append(jobImg,jobDetails)
        list.insertBefore(job, paginationContainer)
        if (i == lists.length - 1) break
    }
    saveButtons()
    titleNavigate()
    applyNavigate()
    pageButtonGeneration()
}

let searchBar = document.getElementById("searches")
let locationBar = document.getElementById("locations")
let searchContainer = document.getElementById("form")
let noJob = document.querySelector(".no-jobs")
// searchContainer.addEventListener("submit", e => {
//     e.preventDefault()
//     const search = searchBar.value.trim().toLowerCase()
//     const locationSearch = locationBar.value.trim().toLowerCase()
//     let found = false
//     Array.from(jobs).forEach(job => {
//         let title = job.querySelector(".job-title").textContent.toLowerCase()
//         let company = job.querySelector(".company-name").textContent.toLowerCase()
//         let location = job.querySelector(".job-location").textContent.toLowerCase()
//         let visible = (title.includes(search) || company.includes(search)) && location.includes(locationSearch)
//         if (visible) found = true
//         job.classList.toggle("hide", !visible)
//     })
//     if (!found) {
//         noJob.style.display = "block"
//     }
//     else noJob.style.display = "none"
// })

function searchJobs(JobList, search, locationSearch) {
    const res = JobList.filter(jobs => {
        const title = jobs.title.toLowerCase()
        const company = jobs.company.toLowerCase()
        const location = jobs.location.toLowerCase()
        return (title.includes(search) || company.includes(search)) && location.includes(locationSearch)
    })
    return res
}

function clearList() {
    document.querySelectorAll(".job").forEach(job => {
        job.style.display = "none"
    })
}

searchContainer.addEventListener("submit", e => {
    e.preventDefault()
    const search = searchBar.value.trim().toLowerCase()
    const locationSearch = locationBar.value.trim().toLowerCase()
    let found = false
    let filteredJobs = searchJobs(JobList, search, locationSearch)
    if (filteredJobs.length > 0) found = true
    if (!found) {
        clearList()
        document.getElementById("pagination-container").style.display = "none"
        console.log("Undefined")
        noJob.style.display = "block"
    }
    else {
        clearList()
        console.log(filteredJobs)
        sessionStorage.setItem("CurrentPage", "1")
        document.getElementById("pagination-container").style.display = ""
        sessionStorage.setItem("List", JSON.stringify(filteredJobs))
        generatePaginations()
        displayJobs()
        noJob.style.display = "none"
    }
})

const editProfile = () => {
    window.location.href = `EditProfile.html`
}

username.addEventListener("click", editProfile)
profilePic.addEventListener("click", editProfile)

function countPages() {
    lists = JSON.parse(sessionStorage.getItem("List"))
    let pageCount = Math.ceil(lists.length / itemsPerPage)
    return pageCount
}

function generatePaginations() {
    let pageCount = countPages()
    paginationContainer.innerHTML = ``
    for (let i = 1; i <= pageCount; i++) {
        let button = document.createElement("button")
        button.classList.add("page-button", i)
        paginationContainer.appendChild(button)
        button.textContent = i
        if (i == parseInt(sessionStorage.getItem("CurrentPage"))) {
            button.classList.add("active")
        }
    }
}

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll behavior, you can use "auto" for instant scrolling
    });
  };


function pageButtonGeneration() {
    const pageButtons = paginationContainer.querySelectorAll(".page-button")
    pageButtons.forEach(button => {
        button.addEventListener("click", () => {
            clearList()
            let pageDest = parseInt(button.textContent)
            sessionStorage.setItem("CurrentPage", JSON.stringify(pageDest))
            paginationContainer.querySelector(".active").classList.remove("active")
            button.classList.add("active")
            scrollToTop()
            displayJobs()
        })
    })
}

