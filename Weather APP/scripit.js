let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";



const searchBar = document.querySelector("input[type = search]");
const searchBtn = document.getElementById("searchBtn");
const getDeviceLocation = document.getElementById("getLocation");
let city;

//to fetch url for get current location
async function getWeatherCor(lat, lon) {
  let apiCURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiCURL);
  let data = await response.json();
  displayWeather(data);
}

//for getting current lat and lon
function getLatLon() {
  navigator.geolocation.getCurrentPosition(function (p) {
    const lat = p.coords.latitude;
    const lon = p.coords.longitude;

    getWeatherCor(lat, lon);
  });
}

//for
async function get_Weather() {
  const response = await fetch(
    apiURL + city + "&appid=" + apiKey + "&units=metric",
  );
  let data = await response.json();

  displayWeather(data);
}

searchBtn.addEventListener("click", function () {
  if (searchBar.value.trim() === "" || searchBar.value === null) {
    return;
  }

  city = searchBar.value;
  searchBar.value = "";
  get_Weather();
});

getDeviceLocation.addEventListener("click", () => {
  getLatLon();
});

function displayWeather(data) {
  const weatherContainer = document.querySelector(".weatherContainer");

  // remove old weather card
  weatherContainer.innerHTML = "";

  let secondContainer = document.createElement("div");
  secondContainer.classList = "secondContainer";

  //  image code
    let weatherIcon = document.createElement('img');
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

weatherIcon.alt = data.weather[0].main;

  //details etc
  let cityName = document.createElement("h2");
  cityName.innerText = data.name;

  let dataTime = document.createElement("p");
  const timezoneOffset = data.timezone * 1000;

  const utcTime = Date.now() + new Date().getTimezoneOffset() * 60000;

  const cityTime = new Date(utcTime + timezoneOffset);

  dataTime.textContent = cityTime.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  let temprature = document.createElement("p");
  temprature.innerText = `${data.main.temp} °C`;

  let weatherCondition = document.createElement("p");
  weatherCondition.innerText = `Condition: ${data.weather[0].main}`;

  let spanContainer = document.createElement("span");

  let windSpeed = document.createElement("p");
  windSpeed.textContent = `Wind: ${data.wind.speed} m/s`;

  let humidity = document.createElement("p");
  humidity.innerText = `Humidity: ${data.main.humidity}%`;

  spanContainer.appendChild(windSpeed);
  spanContainer.appendChild(humidity);

  secondContainer.appendChild(weatherIcon);
  secondContainer.appendChild(cityName);
  secondContainer.appendChild(dataTime);
  secondContainer.appendChild(temprature);
  secondContainer.appendChild(weatherCondition);
  secondContainer.appendChild(spanContainer);
  document.body.appendChild(secondContainer);

  weatherContainer.appendChild(secondContainer);
}
