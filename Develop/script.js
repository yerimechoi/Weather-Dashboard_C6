// TO DO
// .ready() current location
// search btn event listener
// search city
// save location & data to search history
// add btn to the search history
// presented with current city name, date, icon (depending on weather coniditions), temerpature, wind & humidity 
// presented with future city name, date, icon (depending on weather coniditions), temerpature, wind & humidity 
    // long&lat results = future

var APIKey = "c9e7827720d40ceda697937555df69aa";

//current city
// $(document).ready(function(){
// });

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

    $.ajax({
        url: searchURL,
        method: `GET`,
    }).then(function(response){
        console.log(response)
    })
}



    // var longLatURL = `http://api.openweathermap.org/geo/1.0/reverse?lat=` + lat + `&lon=` + lon +`&limit=` + limit + `&appid=` + APIKey;
    // var lat;
    // var lon;
    // var limit;