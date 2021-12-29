function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#search-city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = `${cityInput.value}`;
  getCity(cityInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function getCity(cityName) {
  let apiKey = "c6cc476a27f0a0763f5b1cf675c13355";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeahter);
}

function showWeahter(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let descriptionElement = document.querySelector("#weather-description");
  descriptionElement.innerHTML = response.data.weather[0].description;
}
function getCurrentPosition(position) {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
function showCurrentLocationWeahter(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let descriptionElement = document.querySelector("#weather-description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let cityElement = document.querySelector("#search-city");
  cityElement.innerHTML = response.data.name;
}
function retrievePosition(position) {
  let apiKey = "c6cc476a27f0a0763f5b1cf675c13355";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showCurrentLocationWeahter);
}

let button = document.querySelector("button");

button.addEventListener("click", getCurrentPosition);
