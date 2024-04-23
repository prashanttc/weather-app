const apiKey ="2a13f69588875354ef07ea24ef5e14b6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".searchbox input")
const searchbtn = document.querySelector(".searchbox button")
const weathericon = document.querySelector(".weatherlogo")


async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
  

if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".centerpart").style.display = "none";
}
else{
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src ="weather-app-img/images/clouds.png";
    }

    else if(data.weather[0].main == "Clear"){
        weathericon.src ="weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src ="weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src ="weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src ="weather-app-img/images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src ="weather-app-img/images/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".centerpart").style.display = "flex";

}
}




searchbtn.addEventListener("click" , ()=> {
    checkWeather(searchbox.value);

})
