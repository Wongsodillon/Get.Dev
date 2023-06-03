import { users } from "./UserDatabase.js";

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