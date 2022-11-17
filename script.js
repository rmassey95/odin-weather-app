function getWeather() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=f31493932872d45dd431ce61b5a7cc79&units=metric', {mode: 'cors'})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const sortedData = sortData(data);
    console.log(sortedData);
  });
}

function sortData(data){
  let sortedData = {};

  sortedData.loc = data.name;
  sortedData.temp = data.main.temp;
  sortedData.feelsLike = data.main.feels_like;
  sortedData.humidity = data.main.humidity;
  sortedData.tempMax = data.main.temp_max;
  sortedData.tempMin = data.main.temp_min;
  sortedData.weatherDesc = data.weather[0].description;
  sortedData.windSpeed = data.wind.speed;

  return sortedData;
}

getWeather();