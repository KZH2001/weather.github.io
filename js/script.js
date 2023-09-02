const apiKey = "37350a2f0be85d24f9a076b43630c512";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=yangon";

async function checkWeather(){
    const response = await fetch(apiUrl +  `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".cityWeather").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp + "°";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

console.log("hello");
}
checkWeather();

