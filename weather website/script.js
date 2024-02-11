const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const error = document.getElementById('error');
const temperature = document.querySelector('.temperature');
const cityName = document.querySelector('.city');
const humidityValue = document.querySelector('.humidityValue');
const windSpeed = document.querySelector('.windSpeed');
const icon = document.querySelector('.icons');

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34d66d413a50527fc7694bb5211278a3&units=metric`);
        const data = await response.json();

        if (response.status === 200) {
            error.style.display = 'none';
            temperature.textContent = Math.round(data.main.temp) + "°C";
            cityName.textContent = data.name;
            humidityValue.textContent = Math.round(data.main.humidity) + "%";
            windSpeed.textContent = Math.round(data.wind.speed) + "km/h";

            const weatherMain = data.weather[0].main.toLowerCase();
            switch (weatherMain) {
                case 'clouds':
                    icon.src = "./Photos/cloud.png";
                    break;
                case 'clear':
                    icon.src = "./Photos/clear.png";
                    break;
                case 'rain':
                    icon.src = "./Photos/rain.png";
                    break;
                case 'haze':
                    icon.src = "./Photos/haze.svg";
                    break;
                case 'snow':
                    icon.src = "./Photos/snowy.svg";
                    break;
                case 'strom':
                    icon.src = "./Photos/strom.svg";
                    break;
                default:
                    icon.src = "./Photos/clear.png"; // Default icon
                    break;
            }
        } else {
            error.style.display = 'block';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        error.style.display = 'block';
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(cityInput.value);
});