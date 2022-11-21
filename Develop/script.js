// TO DO
// .ready() current location
// search btn event listener
// search city
// save location & data to search history
// add btn to the search history
// presented with current city name, date, icon (depending on weather coniditions), temerpature, wind & humidity 
// presented with future city name, date, icon (depending on weather coniditions), temerpature, wind & humidity 
    // long&lat results = future
//https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid={API key}

var recentSearchContainer = document.querySelector(".left");

var APIKey = "c9e7827720d40ceda697937555df69aa";

var today_cityDate = document.querySelector("#city&date");
var today_icon = document.querySelector("#icon");
var today_temp = document.querySelector("#todays-temp");
var today_wind = document.querySelector ("#todays-wind");
var today_hum = document.querySelector("#todays-hum");

var day2 = document.querySelector("#d2");
var day2_temp = document.querySelector("#2-temp");
var day2_wind = document.querySelector("#2-wind");
var day2_hum = document.querySelector("#2-hum");
var day3 = document.querySelector("#d3");
var day3_temp = document.querySelector("#3-temp");
var day3_wind = document.querySelector("#3-wind");
var day3_hum = document.querySelector("#3-hum");
var day4 = document.querySelector("#d4");
var day4_temp = document.querySelector("#4-temp");
var day4_wind = document.querySelector("#4-wind");
var day4_hum = document.querySelector("#4-hum");
var day5 = document.querySelector("#d5");
var day5_temp = document.querySelector("#5-temp");
var day5_wind = document.querySelector("#5-wind");
var day5_hum = document.querySelector("#5-hum");
var day6 = document.querySelector("#d6");
var day6_temp = document.querySelector("#6-temp");
var day6_wind = document.querySelector("#6-wind");
var day6_hum = document.querySelector("#6-hum");

$(`#searchBtn`).click(function(event){
    event.preventDefault();

    var city = $(".userInput").val().trim();
    if (city === " "){
        return alert('Enter a valid City Name');
    }
    searchWeather(city);
});

function searchWeather(city){
    var searchURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    fetch(searchURL).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                displayWeather(data.items, )
            })
        }
    })
}




// var longLatURL = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid={API key}`;
// var lat;
// var lon;
// var limit;