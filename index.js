var loc = "Delhi";
var apiKey = "3a78a66c9e7fee120693bd7c42887470";
var units = "metric";
var url =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  loc +
  "&appid=" +
  apiKey +
  "&units=" +
  units;

var request = new XMLHttpRequest();
request.open("GET", url, true);
request.onload = function () {
  var weatherData = JSON.parse(this.response);
  var temp = weatherData.main.temp;
  var desp = weatherData.weather[0].description;
  var icon = weatherData.weather[0].icon;
  var imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  $("#weather").text(desp);
  $("#location").text(loc);
  $("#temp").text(temp);
  $("#icon").attr("src", imgUrl);

  if (request.status >= 200 && request.status < 400) {
    var temp = obj.main.temp;
  } else {
    console.log("The city doesn't exist! Kindly check");
  }
};

$(".refresh").on("click", function () {
  window.location.reload();
});

$(".search").on("click", function () {
  $(".search-bar").removeClass("hide");
  $(".search-bar").addClass("show");
});
request.send();
