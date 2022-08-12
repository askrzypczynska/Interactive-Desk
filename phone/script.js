const timeInfo = document.querySelector(".time")
const dateInfo = document.querySelector(".date")
const cityInput = document.querySelector("#cityInput")
const weatherIcon = document.querySelector("#weatherIcon")
const temperature = document.querySelector(".temperature")
const humidityStatus = document.querySelector(".humidityStatus")

const API_LINK = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const API_KEY = '&appid=78915a37fc731bae01e73c808d1bf97a';
const API_UNITS = '&units=metric';

const API_WEATHER_LINK = 'https://api.openweathermap.org/data/2.5/weather?lat='
let API_WEATHER_LAT = ''
let API_WEATHER_LON = ''
const API_WEATHER_LON2 = '&lon='

const now = new Date();

setTime = () => {
    let hour = now.getHours();
    let min = now.getMinutes();

    timeInfo.textContent = `${hour}:${min}`
    dateInfo.textContent = `${now.getDate()}.${now.getMonth()+1}`
}

setTime()

const newCity = () => {
    cityInput.value = "Szczecin";

    if(cityInput.value === "Szczecin"){
        cityInput.value = "";
        cityInput.placeholder = "Enter City"
    }
}

const getGCODE = () => {
    const city = cityInput.value
    let URL = API_LINK + city + API_KEY;

    fetch(URL)
        .then(res => res.json())
        .then(res => {getWeather(res)})
        .catch(() => console.error("Please enter a valid city name"))
}

const getWeather = (y) => {
    URL = API_WEATHER_LINK + y[0].lat + API_WEATHER_LON2 + y[0].lon + API_KEY + API_UNITS

    fetch(URL)
        .then(res => res.json())
         .then(res => {
             const temp = res.main.temp
             const status = Object.assign({}, ...res.weather)
             let humidity = res.main.humidity;


             weatherIcon.setAttribute('src', './img/ice.png')

             if(status.id<=232){
                weatherIcon.setAttribute('src', './img/thunderstorm.png')
             }else if(status.id<=321){
                weatherIcon.setAttribute('src', './img/drizzle.png')
             }else if(status.id<=531){
                weatherIcon.setAttribute('src', './img/rain.png')
             }else if(status.id<=622){
                weatherIcon.setAttribute('src', './img/snow.png')
             }else if(status.id<=781){
                weatherIcon.setAttribute('src', './img/fog.png')
             }else if(status.id===800){
                weatherIcon.setAttribute('src', './img/sun.png')
             }else if(status.id<=804){
                weatherIcon.setAttribute('src', './img/cloud.png')
             }
            
             cityInput.value = res.name

             temperature.textContent = Math.round(temp) + '°C';
             humidityStatus.textContent = `Humidity: ${humidity}%`;
         })
         .catch()
}


cityInput.addEventListener('click', newCity)

cityInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {    
        if(cityInput.value!==""){
            getGCODE()
            console.log('dzi');
        }
    }
});

getGCODE()