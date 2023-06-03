import { movieList } from "./database.js";

const title = document.querySelector("h1")
title.textContent = "Movie Details"
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
const movieToShow = movieList.find(movie => movie.id === parseInt(movieId))
const movieDetailsDiv = document.getElementById('movieDetails');
movieDetailsDiv.textContent = `Movie Name: ${movieToShow.name}`;