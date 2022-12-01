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

let recentSearchContainer = document.querySelector(".left");

let APIKey = "c9e7827720d40ceda697937555df69aa";

let today_cityDate = document.querySelector("#city&date");
let today_icon = document.querySelector("#icon");
let today_temp = document.querySelector("#todays-temp");
let today_wind = document.querySelector ("#todays-wind");
let today_hum = document.querySelector("#todays-hum");

let day2 = document.querySelector("#d2");
let day2_temp = document.querySelector("#2-temp");
let day2_wind = document.querySelector("#2-wind");
let day2_hum = document.querySelector("#2-hum");
let day3 = document.querySelector("#d3");
let day3_temp = document.querySelector("#3-temp");
let day3_wind = document.querySelector("#3-wind");
let day3_hum = document.querySelector("#3-hum");
let day4 = document.querySelector("#d4");
let day4_temp = document.querySelector("#4-temp");
let day4_wind = document.querySelector("#4-wind");
let day4_hum = document.querySelector("#4-hum");
let day5 = document.querySelector("#d5");
let day5_temp = document.querySelector("#5-temp");
let day5_wind = document.querySelector("#5-wind");
let day5_hum = document.querySelector("#5-hum");
let day6 = document.querySelector("#d6");
let day6_temp = document.querySelector("#6-temp");
let day6_wind = document.querySelector("#6-wind");
let day6_hum = document.querySelector("#6-hum");

$(document).ready(function(){
    let innit = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

});

$(`#searchBtn`).click(function(event){
    event.preventDefault();

    let city = $(".userInput").val().trim();
    if (city === " "){
        return alert('Enter a valid City Name');
    }
    searchWeather(city);
});

function searchWeather(city){
    let searchURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    fetch(searchURL).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                displayWeather(data.items, )
            })
        }
    })
}

let longLatURL = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;