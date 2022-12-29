let APIKey = "c9e7827720d40ceda697937555df69aa";
let searchedCity = JSON.parse(localStorage.getItem("cities"));
let userInput = "";

//initial weather
function init(){
    localStorage.removeItem("cities");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=toronto&units=imperial&appid=${APIKey}`)
        .then(function(data){
            return data.json();
        }).then(function(data){
            let tCity = $("<h4>").attr('id', 'cityDay').text(data.name);
            let today = dayjs().format(" (MM/DD/YYYY)")
            var tDate = tCity.append(today);
            let tIcon = $("<i>").attr('id', 'icon').text(data.weather.icon);
            let tTemp = $("<p>").attr('id', 'todays-temp').text("Temperature: " + data.main.temp + "˚F");
            let tWind = $("<p>").attr('id', 'todays-wind').text("Wind: " + data.wind.speed + "MPH");
            let tHum = $("<p>").attr('id', 'todays-hum').text("Humidity: " + data.main.humidity + "%");
            $(".today").append(tCity, tDate, tIcon, tTemp, tWind, tHum);
        });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=imperial&appid=${APIKey}`)
        .then(function(data) {
            return data.json();
        }).then(function(data){
            for(let i=0; i < 5; i++){
                let div = $("<div>").addClass("cardS");
            // //dates
            //     let date = dayjs().format("MM/DD/YYYY");
            //     $("<h6>").text(date[i]);
            // //icon
            //     let icon = $("<i>").attr('id', 'icon').text(data.weather[i].icon)
            // //temp
            //     let temp = $("<p>").attr('id', 'todays-temp').text("Temperature: " + data.main[i].temp + " ˚F");
            // //wind
            //     let wind = $("<p>").attr('id', 'todays-wind').text("Wind: " + data.wind[i].speed + " MPH");
            // //hum
            //     let hum = $("<p>").attr('id', 'todays-hum').text("Humidity: " + main[i].humidity + " %");
            // //append
            //     $(".cardS").append(date, icon, temp, wind, hum);
        }})
    
    let Torontobutton = $("<button>").attr('id', 'btn').text("Toronto");
    $(".history").append(Torontobutton);
};

//search button event listener
$(`#searchBtn`).click(function(event){
    event.preventDefault();

    let city = $(".userInput").val().trim();

    if (storage.includes(city)){
        (storage).remove(city);
    } else {
        (storage).push(city);
    };

    searchWeather();

    localStorage.setItem("cities", JSON.stringify(searchedCity));
    let button = $("<button>").attr('id', 'btn').text(city)
    $(".history").append(button);
});

//seach city function
function searchWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=${APIKey}`)
        .then(function(data){
            return data.json();
        }).then(function(data){
            let date = dayjs().format(" (MM/DD/YYYY)")
            let icon = $("<i>").attr('id', 'icon').text(data.weather.icon);
            let temp = $("<p>").attr('id', 'todays-temp').text("Temperature: " + data.main.temp + "˚F");
            let wind = $("<p>").attr('id', 'todays-wind').text("Wind: " + data.wind.speed + "MPH");
            let hum = $("<p>").attr('id', 'todays-hum').text("Humidity: " + data.main.humidity + "%");
            $(".today").append(date, icon, temp, wind, hum);
        });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=imperial&appid=${APIKey}`)
        .then(function(data) {
            return data.json();
        }).then(function(data){
            for(let i=0; i < 5; i++){
                let div = $("<div>").addClass("cardS");
                //WHATEVER IS CORRECT IN THE INIT FUNCTION
        }})
};

init();