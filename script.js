// Change city name function

function changeCityName(event) {
  event.preventDefault(); // call the function and stop the page reloading
  let cityName = document.querySelector("#city-input"); // variable to capture the city input value
  let cityHeader = document.querySelector("#city-name"); // variable to capture the h1
  cityHeader.innerHTML = cityName.value; // change the h1 to the city input value
}

// Day and time function

function formatDate(date) {
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`; // ensures there is a zero in front of single digits e.g. 15:06 would be 15:6
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay}, ${hour}:${minute}`;
}

// Call city name function

let city = document.querySelector("#city-search");
city.addEventListener("submit", changeCityName);

// Call time and day function

let dayTime = document.querySelector("#current-day-time");
let currentDate = new Date();

dayTime.innerHTML = formatDate(currentDate);

// PREVIOUS HOMEWORK

// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let city = prompt("Enter a city");
// city = city.toLowerCase().trim();

// if (weather[city] !== undefined) {
//   let temp = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemp = Math.round(temp);
//   let fahrTemp = Math.round(temp * 9) / 5 + 32;
//   alert(
//     `It is currently ${celsiusTemp}°C (${fahrTemp}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for ${city}, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }

// Old code - my effort before solution
// if (city === "paris") {
//   let fahrenheit = Math.round(weather.paris.temp * 9) / 5 + 32;
//   let celsius = Math.round(weather.paris.temp);
//   alert(
//     `It is currently ${celsius}°C (${fahrenheit}°F) in ${weather.paris.name} with a humidity of ${weather.paris.humidity}%`
//   );
// } else if (city === "tokyo") {
//   let fahrenheit = Math.round(weather.tokyo.temp * 9) / 5 + 32;
//   let celsius = Math.round(weather.tokyo.temp);
//   alert(
//     `It is currently ${celsius}°C (${fahrenheit}°F) in ${weather.tokyo.name} with a humidity of ${weather.tokyo.humidity}%`
//   );
// } else if (city === "lisbon") {
//   let fahrenheit = Math.round(weather.lisbon.temp * 9) / 5 + 32;
//   let celsius = Math.round(weather.lisbon.temp);
//   alert(
//     `It is currently ${celsius}°C (${fahrenheit}°F) in ${weather.lisbon.name} with a humidity of ${weather.lisbon.humidity}%`
//   );
// } else if (city === "san francisco" || city === "san fransisco") {
//   let fahrenheit = Math.round(weather.sanfrancisco.temp * 9) / 5 + 32;
//   let celsius = Math.round(weather.sanfrancisco.temp);
//   alert(
//     `It is currently ${celsius}°C (${fahrenheit}°F) in ${weather.sanfrancisco.name} with a humidity of ${weather.sanfrancisco.humidity}%`
//   );
// } else if (city === "oslo") {
//   let fahrenheit = Math.round(weather.oslo.temp * 9) / 5 + 32;
//   let celsius = Math.round(weather.oslo.temp);
//   alert(
//     `It is currently ${celsius}°C (${fahrenheit}°F) in ${weather.oslo.name} with a humidity of ${weather.oslo.humidity}%`
//   );
// } else {
//   alert(
//     "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
//   );
// }

// Code from Athena

// const temperature = {celsius: 25 // example Celsius value};

// const fahrenheit = (temperature.celsius * 9/5) + 32;
// alert(The temperature in Fahrenheit is ${fahrenheit}°F);

// Original way Athena suggested until I asked for help fixing code and saw the way above

// const parisfahrenheit = (weather.paris.temp * 9) / 5 + 32;
// const tokyofahrenheit = (weather.tokyo.temp * 9) / 5 + 32;
// const lisbonfahrenheit = (weather.lisbon.temp * 9) / 5 + 32;
// const sanfranfahrenheit = (weather.sanfrancisco.temp * 9) / 5 + 32;
// const oslofahrenheit = (weather.oslo.temp * 9) / 5 + 32;
