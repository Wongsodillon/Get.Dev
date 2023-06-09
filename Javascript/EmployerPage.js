import { JobList } from "./JobDatabase.js";

let lists = JSON.parse(sessionStorage.getItem("List"))
const user = JSON.parse(localStorage.getItem("User"))
const username = document.querySelector(".username")
const profilePic = document.getElementById("profile-pic")
username.textContent = user.username
profilePic.src = user.img

const navigateEditProfile = () => window.location.href = `EmployerProfile.html`
username.addEventListener("click", navigateEditProfile)
profilePic.addEventListener("click", navigateEditProfile)
if (localStorage.getItem("List") === null) {
    console.log("Localstorage None")
    localStorage.setItem("List", JSON.stringify(JobList))
}
if (sessionStorage.getItem("List") === null) {
    console.log("Session Storage None")
    sessionStorage.setItem("List", JSON.stringify(getJobs()))
}
const addButton = document.getElementById("add-job");
const postJobGUI = document.getElementById("post-job")
const overlay = document.querySelector(".overlay")
displayJobs()
document.querySelector(".seek-button").addEventListener("click", () => {
    window.location.href = `SeekDevelopers.html`
})

function getJobs() {
    const tmpList = JSON.parse(localStorage.getItem("List"))
    return tmpList.filter(job => job.company === user.company)
}

function getJobById(JobID) {
    const tmpList = JSON.parse(sessionStorage.getItem("List"))
    return tmpList.find(job => job.id == JobID)
}


function applicantButton() {
    let buttons = document.querySelectorAll(".apply-button")
    buttons.forEach(button => {
        button.addEventListener("click", (e) => viewApplicants(e, button.classList[1], button))
    })
}

function viewApplicants(e, JobID, DOM) {
    e.preventDefault()
    const dialog = document.querySelector(".applicant-list")
    dialog.showModal()
    const job = getJobById(JobID)
    console.log(job)
    const applicants = job.applicants
    console.log(applicants)
    dialog.querySelector(".dialog-job-title").textContent = `${job.title} Applicants`
    const backButton = dialog.querySelector(".back-button")
    const tableBody = dialog.querySelector("tbody")
    const table = dialog.querySelector("table")
    const noApplicants = dialog.querySelector(".no-applicants")
    if (applicants.length <= 0) {
        table.style.display = "none"
        noApplicants.style.display = "block"
    }
    else {
        noApplicants.style.display = "none"
        table.style.display = "block"
    }
    tableBody.innerHTML = ``
    for (let i = 0; i < applicants.length; i++) {
        const row = document.createElement("tr")

        const nameCell = document.createElement("td")
        nameCell.textContent = `${applicants[i].firstName} ${applicants[i].lastName}`

        const currentDate = new Date()
        const dateOfBirth = new Date(applicants[i].dob)
        const age = currentDate.getFullYear() - dateOfBirth.getFullYear()
        console.log(applicants[i].dob)
        const ageCell = document.createElement("td")
        ageCell.textContent = `${age}`

        const emailCell = document.createElement("td")
        emailCell.textContent = `${applicants[i].email}`

        const jobTitle = document.createElement("td")
        jobTitle.textContent = `${applicants[i].profession}`

        const location = document.createElement("td")
        location.textContent = `${applicants[i].address.city}`

        const resumeCell = document.createElement("td")
        const viewResume = document.createElement("button")
        viewResume.textContent = "View Resume"
        viewResume.classList.add("view-button")

        resumeCell.appendChild(viewResume)
        row.appendChild(nameCell)
        row.append(ageCell)
        row.appendChild(emailCell)
        row.appendChild(jobTitle)
        row.appendChild(location)
        row.appendChild(resumeCell)
        tableBody.appendChild(row)
    }

    backButton.addEventListener("click", () => {
        dialog.close()
    })
}

function displayJobs() {
    lists = JSON.parse(sessionStorage.getItem("List"))
    const list = document.querySelector(".job-list")
    for (let i = 0; i < lists.length; i++) {
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
    
        let applicantButton = document.createElement("button")
        applicantButton.textContent = "Applicants"
        applicantButton.classList.add("apply-button")
        applicantButton.classList.add(lists[i].id)
        let editButton = document.createElement("img")
        editButton.src = "assets/edit-icon.png"
        editButton.classList.add("edit-button")
        let deleteButton = document.createElement("img")
        deleteButton.src = "assets/delete-icon.png"
        deleteButton.classList.add("delete-button")
        buttonContainer.append(applicantButton, editButton, deleteButton)
        lowerDetails.append(locationContainer, buttonContainer)
    
        jobDetails.append(upperDetails, companyName, salaryRange, levelContainer, lowerDetails)
        job.append(jobImg,jobDetails)
        list.insertBefore(job, addButton)
    }
    applicantButton()
}

function hoverEffect(args) {
    if (args == 1) {
        setTimeout(() => {
            document.querySelector(".add-icon").style.display = "none"
            document.querySelector(".post-job-text").style.display = "inline"
            addButton.style.width = "9rem"
            addButton.style.borderRadius = "32px"
            setTimeout(() => {
                document.querySelector(".post-job-text").style.opacity = "1"
            }, 350)
        }, 100)
    }
    else if (args == 0) {
        setTimeout(() => {
            document.querySelector(".add-icon").style.display = "inline"
            document.querySelector(".post-job-text").style.display = "none"
            document.getElementById("add-job").style.width = ""
            addButton.style.borderRadius = ""
            setTimeout(() => {
                document.querySelector(".post-job-text").style.opacity = "0"
            }, 350)
        }, 200)
    }
}

addButton.addEventListener("mouseenter", () => {
    hoverEffect(1)
});
addButton.addEventListener("mouseleave", () => {
    hoverEffect(0)
})

function displayPostJob(e) {
    e.preventDefault()
    postJobGUI.showModal()
    document.body.style.overflow = "hidden"
    postJobGUI.style.display = "flex"
    overlay.style.display = "block"
}
function closePostJob(e) {
    e.preventDefault()
    postJobGUI.close()
    document.body.style.overflow = ""
    overlay.style.display = "none"
    postJobGUI.style.display = "none"
}
document.addEventListener("DOMContentLoaded", () => {
    addButton.addEventListener("click", displayPostJob)
    document.querySelector(".close-button").addEventListener("click", closePostJob)
    const nextButton = document.querySelector(".next-post")
    const backButton = document.querySelector(".back-post")
    const form1 = document.querySelector(".form-1")
    const form2 = document.querySelector(".form-2")
    nextButton.addEventListener("click", (e) => {
        e.preventDefault()
        form1.style.display = "none"
        form2.style.display = "block"
    })
    backButton.addEventListener("click", (e) => {
        e.preventDefault()
        form1.style.display = "block"
        form2.style.display = "none"
    })
})

let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

const initializer = () => {
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);
};

const modifyText = (command, value = null) => {
  document.execCommand(command, false, value);
};

optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id);
  });
});

advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, button.value);
  });
});

const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
        if (needsRemoval) {
            let alreadyActive = button.classList.contains("active")

            highlighterRemover(className)

            if (!alreadyActive) {
                button.classList.add("active")
            }
        } 
        else {
            button.classList.toggle("active")
        }
    })
  })
}

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey) {
    if (event.key === "b") {
        event.preventDefault()
        modifyText("bold")
        shortcutHandler("bold")
    }

    if (event.key === "i") {
        event.preventDefault()
        modifyText("italic")
        shortcutHandler("italic")
    }

    if (event.key === 'u') {
        event.preventDefault()
        modifyText("underline")
        shortcutHandler("underline")
    }
  }
});

const shortcutHandler = (buttonId) => {
    const button = document.getElementById(buttonId)
    if (!button.classList.contains("active")) {
        button.classList.add("active")
    }
    else {
        button.classList.remove("active")
    }
};

window.onload = initializer;