import { movieList } from "./database.js";

const body = document.querySelector("body");
const text = document.querySelector("h1");
text.textContent = "Movies";

for (let i = 0; i < movieList.length; i++) {
  let link = document.createElement("a");
  link.textContent = `${movieList[i].name}`;
  link.setAttribute("href", `movie.html?id=${movieList[i].id}/${movieList[i].name}`);
  link.classList.add("link");
  body.appendChild(link);
}