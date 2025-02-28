function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let dateElement = document.querySelector("#current-date-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  let unitElement = document.querySelector("#unit");
  let humidTextElement = document.querySelector("#humid-text");
  let windTextElement = document.querySelector("#wind-text");

  cityElement.innerHTML = response.data.city;
  dateElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  unitElement.innerHTML = "°C";
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  humidTextElement.innerHTML = "humidity:";
  windTextElement.innerHTML = "wind:";

  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let dateValue = date.getDate();
  let year = date.getFullYear();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}, ${dateValue} ${month} ${year}`;
}

function searchCity(city) {
  let apiKey = "a2ab500f41eaff40b9aat33a8a92f8ao";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");

  searchCity(searchInput.value);
}

function getForecast(city) {
  let apiKey = "a2ab500f41eaff40b9aat33a8a92f8ao";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
    <div class="forecast-days">
      <div class="forecast-day">${day}</div>
      <div class="forecast-icon">⛅️</div>
      <div class="forecast-temps">
        <div class="forecast-temp">
          <strong>16°</strong>
        </div>
        <div class="forecast-temp">9°</div>
      </div>
    </div>
    `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#city-search");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Bristol");
