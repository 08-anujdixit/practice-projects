const searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let searchCount = document.getElementById('foundMovie');
const main = document.querySelector("main");
searchBtn.addEventListener("click", function () {
  if (!searchInput.value.trim()) {
    return;
  }
  let movieName = searchInput.value.trim();
  fetchMovie(movieName);
});

async function fetchMovie(movieName) {
  apiURL = `http://www.omdbapi.com/?apikey=${Key}&s=${movieName}&type=movie`;
  let response = await fetch(apiURL);
  let data = await response.json();

  if (data.Response === "False") {
    searchCount.innerText = `Total (0) Results Found`;
    main.innerHTML = "";
    return;
  }

  searchCount.innerText = `Total (${data.Search.length}) Results Found`;
  displayMovies(data);
}

function displayMovies(data) {
  main.innerHTML = "";

  data.Search.forEach(function (e) {
    let movieCard = document.createElement("div");
    movieCard.className = "movieCard";

    let poster = document.createElement("img");
    poster.src = e.Poster;

    let title = document.createElement("p");
    title.innerText = e.Title;
    let year = document.createElement("p");
    year.innerHTML = e.Year;

    movieCard.appendChild(poster);
    movieCard.appendChild(title);
    movieCard.appendChild(year);

    //for extra details
    // movieCard.addEventListener('click', async function(){
    // let imdb = e.imdbID;
    // detailURL = `http://www.omdbapi.com/?apikey=${Key}&i=${detailURL}`
    // let detailRes = await fetch(detailURL)
    // let moredata = await detailRes.json();
    // console.log(moredata)
    // })

    main.appendChild(movieCard);
  });
}
