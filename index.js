var loc = "mumbai";
var apiKey = "3a78a66c9e7fee120693bd7c42887470";
var units = "metric";
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&appid=" + apiKey + "&units=" + units;

var counter = 1;

var request = new XMLHttpRequest();

request.open("GET", url, true);
request.onload = function () {
  var weatherData = JSON.parse(this.response);
  var temp = weatherData.main.temp;
  var humid = weatherData.main.humidity;
  var minTemp = weatherData.main.temp_min;
  var maxTemp = weatherData.main.temp_max;
  var pressure = weatherData.main.pressure;
  var desp = weatherData.weather[0].description;
  var icon = weatherData.weather[0].icon;
  var imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  $("#weather").text(desp);
  $("#location").text(loc);
  $("#temp").text(temp);
  $("#icon").attr("src", imgUrl);
  $("#humid").text(humid);
  $("#min-max").text(minTemp + "/" + maxTemp);
  $("#pressure").text(pressure);
};

$(".plus").on("click", function () {
  $(".info-container").removeClass("hidden");
});

$(".search").on("click", function () {
  counter++;

  if (counter % 2 === 0) {
    $(".search-bar").removeClass("hide");
    $(".search-bar").addClass("show");
    $("#footer").addClass("hide");
  } else {
    $(".search-bar").removeClass("show");
    $(".search-bar").addClass("hide");
    $("#footer").removeClass("hide");
  }
});
request.send();
