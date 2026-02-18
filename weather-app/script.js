const fakeapikey = "add your api key here";
const apiUrl =
  "here is the api url for fetching weather data from openweathermap api, you can get it from their website and add your api key at the end of the url";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}



searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});



searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});             