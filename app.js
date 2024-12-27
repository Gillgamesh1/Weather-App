// Function to fetch weather data
async function getWeather(city) { 
    const apiKey = "b17a7bd1edc8c86aa8b1c28e499d0f18"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
  
      let data = await response.json();
      displayWeather(data);
    } catch (error) {
      document.getElementById('weatherResult').innerText = error.message;
    }
  }
  
  // Function to display weather data
  function displayWeather(data) {
    const weatherDiv = document.getElementById('weatherResult');
    const { name, main, weather } = data;
  
    weatherDiv.innerHTML = `
      <h2>${name}</h2>
      <p>Temperature: ${main.temp}°C</p>
      <p>Weather: ${weather[0].description}</p>
    `;
  }
  
  // Event listener for button click
  document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
      getWeather(city);
    } else {
      document.getElementById('weatherResult').innerText = "Please enter a city name.";
    }
  });
  