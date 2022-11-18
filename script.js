const form = document.querySelector('form');
const container = document.querySelector('.container');
const header = document.createElement('h1');
const temp = document.createElement('p');
const feelsLike = document.createElement('p');
const humidity = document.createElement('p');
const tempMax = document.createElement('p');
const tempMin = document.createElement('p');
const weatherDesc = document.createElement('p');
const windSpeed = document.createElement('p');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(e.target[0].value);
})

async function getWeather(city){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f31493932872d45dd431ce61b5a7cc79&units=metric`, {mode: 'cors'});
  const data = await response.json();

  const sortedData = sortData(data);
  displayData(sortedData);
}

// function getWeather(city) {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f31493932872d45dd431ce61b5a7cc79&units=metric`, {mode: 'cors'})
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const sortedData = sortData(data);
//     displayData(sortedData);
//   });
// }

function sortData(data){
  let sortedData = {};

  sortedData.name = data.name;
  sortedData.temp = data.main.temp;
  sortedData.feelsLike = data.main.feels_like;
  sortedData.humidity = data.main.humidity;
  sortedData.tempMax = data.main.temp_max;
  sortedData.tempMin = data.main.temp_min;
  sortedData.weatherDesc = data.weather[0].description;
  sortedData.windSpeed = data.wind.speed;

  return sortedData;
};

function displayData(data){
  header.innerText = data.name;
  temp.innerText = `Temperature: ${data.temp} C`;
  feelsLike.innerText = `Feels Like: ${data.feelsLike} C`;
  humidity.innerText = `Humidity: ${data.humidity}`;
  tempMax.innerText = `Max Temp: ${data.tempMax}`;
  tempMin.innerText = `Min Temp: ${data.tempMin}`;
  weatherDesc.innerText = `Weather Description: ${data.weatherDesc}`;
  windSpeed.innerText = `Wind speed: ${data.windSpeed} km/h`;

  container.append(header, temp, feelsLike, humidity, tempMax, tempMin, weatherDesc, windSpeed);
};