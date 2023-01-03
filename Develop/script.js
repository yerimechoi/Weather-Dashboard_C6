let APIKey = "c9e7827720d40ceda697937555df69aa";
let searchedCity = JSON.parse(localStorage.getItem("cities"));
let userInput = "";

function init(cityName){
    $(".today").html("");
    $(".cards").html("");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIKey}`)
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

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${APIKey}`)
        .then(function(data) {
            return data.json();
        }).then(function(data){
            console.log(data);
            let dataList = data.list;
            for(let i=0; i < dataList.length; i=i+8){
                let div = $("<div>").addClass("forecastDiv");
                const date = $("<h5>").text(dataList[i].dt_txt.split(" ")[0]);
                let icon = $("<i>").attr('id', 'icon').text(dataList[i].weather.icon);
                let temp = $("<p>").attr('id', 'todays-temp').text("Temperature: " + dataList[i].main.temp + " ˚F");
                let wind = $("<p>").attr('id', 'todays-wind').text("Wind: " + dataList[i].wind.speed + " MPH");
                let hum = $("<p>").attr('id', 'todays-hum').text("Humidity: " + dataList[i].main.humidity + " %");
                div.append(date, icon, temp, wind, hum)
                $(".cards").append(div);
        }}) 
};


$(`#searchBtn`).click(function(event){
    event.preventDefault();

    let city = $(".userInput").val().trim();

    init(city);

    let cityObj = {
        cityName: city
    }
    if(searchedCity === null){
        searchedCity = [];
        searchedCity.push(cityObj);
    } else {
        searchedCity.push(cityObj);
    }

    localStorage.setItem("cities", JSON.stringify(searchedCity));
    console.log(searchedCity);
    let button = $("<button>").attr('id', 'btn').text(city)
    console.log(button);
    button.click(function(event){
        event.preventDefault();
        console.log(event.target.innerHTML);
        init(event.target.innerHTML);
    })
 
    $(".history").append(button);
});

function getFromLocalStorage(){
    if (searchedCity != null){
        for (let i = 0; i <searchedCity.length; i++){
            let button = $("<button>").attr('id', 'btn').text(searchedCity[i].cityName);
            $(".history").append(button);
        }
    }
}

getFromLocalStorage();

init("Toronto");