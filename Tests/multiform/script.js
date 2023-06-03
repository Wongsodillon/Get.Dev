const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const next1 = document.getElementById("next1")
const next2 = document.getElementById("next2")
const back1 = document.getElementById("back1")
const back2 = document.getElementById("back2")

next1.onclick = () => {
    form1.style.left = "450px"
    form2.style.left = "40px"
}
back1.onclick = () => {
    form2.style.left = "450px"
    form1.style.left = "40px"
}
next2.onclick = () => {
    form2.style.left = "450px"
    form3.style.left = "40px"
}
back2.onclick = () => {
    form3.style.left = "450px"
    form2.style.left = "40px"
}
