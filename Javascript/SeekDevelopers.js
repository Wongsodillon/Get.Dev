import { users } from "./UserDatabase.js"

let developers = users.filter(user => user.role === "employee")
console.log(developers)

const user = JSON.parse(localStorage.getItem("User"))
const username = document.querySelector(".username")
const profilePic = document.getElementById("profile-pic")
username.textContent = user.username
profilePic.src = user.img
document.querySelector(".manage-button").addEventListener("click", () => window.location.href = `EmployerPage.html`)
const listContainer = document.querySelector(".developers")
displayDevelopers(developers)

const navigateEditProfile = () => window.location.href = `EmployerProfile.html`

username.addEventListener("click", navigateEditProfile)
profilePic.addEventListener("click", navigateEditProfile)

function displayDevelopers(list) {
    for (let i = 0; i < list.length; i++) {
        listContainer.innerHTML += `
        <div class="developer">
                <img class="dev-profile" src="${list[i].img}">
            <div class="dev-info">
                <p class="dev-name ${list[i].id}">${list[i].firstName} ${list[i].lastName}</p>
                <div class="profession-container">
                    <p class="dev-profession">${list[i].profession}</p>
                </div>
                <div class="about-container">
                    <p class="about-dev">${list[i].about}</p>
                </div>
                <div class="location-container">
                    <img class="icon" src="assets/location-icon.png">
                    <p class="dev-location">${list[i].address.city}, ${list[i].country}</p>
                </div>
            </div>
      </div>`
    }
    generateModal()
}

function searchDevelopers(search) {
    const res = developers.filter(dev => {
        const name = dev.firstName.toLowerCase() + dev.lastName.toLowerCase()
        const location = dev.address.city.toLowerCase() + dev.country.toLowerCase()
        const title = dev.profession.toLowerCase()
        return (location.includes(search) || name.includes(search) || title.includes(search))
    })
    return res
}

const searchBar = document.querySelector(".search-container")
searchBar.addEventListener("submit", event => {
    event.preventDefault()
    const searchBox = document.querySelector(".search-bar")
    const search = searchBox.value.trim().toLowerCase()
    let searchResult = searchDevelopers(search)
    console.log(searchResult)
    listContainer.innerHTML = ``
    displayDevelopers(searchResult)
})

document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".close-button")
    closeButton.addEventListener("click", closeDetails)
    const sendButton = document.querySelector(".send-button")
    sendButton.addEventListener("click", sendMessage)
})

function viewDetails(name, e) {
    e.preventDefault()
    const devDetail = developers.find(dev => dev.id === name.classList[1])
    console.log(devDetail)
    applyDetails(devDetail)
    const dialog = document.querySelector(".developer-details")
    dialog.showModal()
    
}

function closeDetails(e) {
    e.preventDefault()
    const dialog = document.querySelector(".developer-details")
    dialog.close()
}

function sendMessage(e) {
    e.preventDefault()
    const dialog = document.querySelector(".developer-details")
    dialog.querySelector(".email-copied").style.display = "none"
    const messageMessage = document.querySelector(".message-sent")
    messageMessage.style.transform = "translateX(0)"
    const message = dialog.querySelector(".message-field").value
    console.log(message)
    setTimeout(() => {
        messageMessage.style.transform = "translateX(300%)"
    }, 3500) 
    dialog.querySelector(".message-field").value = ""
    dialog.close()
}

function generateModal() {
    const names = document.querySelectorAll(".dev-name")
    names.forEach(name => {
        name.addEventListener("click", e => viewDetails(name, e))
    })
}

function applyDetails(developer) {
    const dialog = document.querySelector(".developer-details")
    dialog.querySelector(".modal-name").textContent = `Reach out to ${developer.firstName} ${developer.lastName}`
    dialog.querySelector(".modal-email").textContent = ` ${developer.email}`
    dialog.querySelector(".modal-phn").textContent = `Phone: ${developer.phone}`
    dialog.querySelector(".modal-location").textContent = `Location: ${developer.address.city}, ${developer.country}`
    dialog.querySelector(".about-title").textContent = `About ${developer.firstName}`
    dialog.querySelector(".modal-about").textContent = developer.about
    dialog.querySelector(".modal-email").addEventListener("click", () => {
        const emailCopied = dialog.querySelector(".email-copied");
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = developer.email;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, tempTextarea.value.length);
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
        emailCopied.style.display = "block";
        setTimeout(() => {
            emailCopied.style.display = "none";
        }, 2000);
    })
}