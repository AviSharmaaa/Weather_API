const api = {
  key: "3a78a66c9e7fee120693bd7c42887470",
  baseurl: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function getLocalWeather() {
  navigator.geolocation.getCurrentPosition(success, error);

  let apiKey = "3a78a66c9e7fee120693bd7c42887470";
  let baseurl2 = "https://api.openweathermap.org/data/2.5/weather";
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
      baseurl2 +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=metric";

    fetch(url)
      .then((weather) => {
        return weather.json();
      })
      .then(displayWeather);
  }
  function error() {
    console.log("Unable to retrieve your location");
  }

  console.log("Locating...");
}

getLocalWeather();

const searchbox = $("#cityname");
searchbox.keypress(function (evt) {
  if (evt.keyCode == 13) {
    getWeather(searchbox.val());
  }
});

function getWeather(query) {
  fetch(`${api.baseurl}${query}&units=metric&appid=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayWeather);
}

function displayWeather(weather) {
  // console.log(weather.name);
  // console.log(weather);
  let temp = weather.main.temp;
  let city = weather.name;
  let humid = weather.main.humidity;
  let minTemp = weather.main.temp_min;
  let maxTemp = weather.main.temp_max;
  let pressure = weather.main.pressure;
  let desp = weather.weather[0].description;
  let icon = weather.weather[0].icon;
  let imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  $("#weather").text(desp);
  $("#location").text(city);
  $("#temp").text(temp);
  $("#icon").attr("src", imgUrl);
  $("#humid").text(humid);
  $("#min-max").text(minTemp + "/" + maxTemp);
  $("#pressure").text(pressure);
}

$(".plus").on("click", function () {
  $(".info-container").removeClass("hidden");
});
