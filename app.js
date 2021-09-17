const axios = require("axios");
const city = process.argv[2];
const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e15c965ff28cc6a856c04b3489f9d68`;
//
axios
  .get(url)
  .then(response => {
    
    const temperatureK = response.data.main.temp;
    const humidity     = response.data.main.humidity;
    const cityName     = response.data.name;
    const countryName  = response.data.sys.country;

    // Handle Temperature conversions from Kelvins
    const temperatureF = (temperatureK * 9) / 5 - 459.67;
    const temperatureC = temperatureK - 273.15;


    const weatherDisplay = `Right now, in \
        ${cityName}, ${countryName} the current temperature is \
        ${temperatureC.toFixed(1)}ºC \
        (${temperatureF.toFixed(1)}ºF), with ${humidity}% humidity, \
        Conditions: ${response.data.weather[0].description} `.replace(/\s+/g, " ");

    console.log(weatherDisplay)
  })
  .catch(error => console.log("Error", error));