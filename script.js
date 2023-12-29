document.getElementById('searchButton').addEventListener('click', function() {
    let city = document.getElementById('cityInput').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    let apiKey = 'a1710d16d37224bb8fdf3d2f44ea1ce0';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => updateWeatherDisplay(data))
        .catch(error => console.error('Fetching error:', error));
}

function updateWeatherDisplay(data) {
    let displayDiv = document.getElementById('weatherDisplay');
    displayDiv.innerHTML = `<h2>Weather in ${data.name}</h2>
                            <p>Temperature: ${data.main.temp} °C</p>
                            <p>Humidity: ${data.main.humidity}%</p>
                            <p>Wind Speed: ${data.wind.speed} m/s</p>`;
}
