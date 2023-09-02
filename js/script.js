const apiKey = "37350a2f0be85d24f9a076b43630c512";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchBtn");
const weatehrIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
  var data = await response.json();
  document.querySelector(".cityWeather").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";


  if (data.weather[0].main == "Clear"){
    weatehrIcon.src = "../images/clear.png";
  }else if (data.weather[0].main == "Clouds"){
    weatehrIcon.src = "../images/clouds.png";
  }else if (data.weather[0].main == "Drizzle"){
    weatehrIcon.src = "../images/drizzle.png";
  }else if (data.weather[0].main == "Mist"){
    weatehrIcon.src = "../images/mist.png";
  } else if (data.weather[0].main == "Rain"){
    weatehrIcon.src = "../images/rain.png";
  }else if (data.weather[0].main == "Snow"){
    weatehrIcon.src = "../images/snow.png";
  }else if (data.weather[0].main == "Thunderstorm"){
    weatehrIcon.src = "../images/thunder.png";
  }
}

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkWeather(searchInput.value);
  }
});
