const apiKey = "97955a7bb38f8bce4093df3abdb4df4c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");
const errorElement = document.querySelector(".error");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    cityElement.innerHTML = data.name;
    tempElement.innerHTML = Math.round(data.main.temp) + "°C";
    humidityElement.innerHTML = data.main.humidity + "%";
    windElement.innerHTML = data.wind.speed + " km/h";

    // Convert the weather condition to lowercase for comparison
    const weatherCondition = data.weather[0].main.toLowerCase();

    if (weatherCondition === "clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (weatherCondition === "clear") {
      weatherIcon.src = "images/clear.png";
    } else if (weatherCondition === "rain") {
      weatherIcon.src = "images/rain.png";
    } else if (weatherCondition === "drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondition === "mist") {
      weatherIcon.src = "images/mist.png";
    }

    // Hide the error message and display the weather information
    errorElement.style.display = "none";
    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    console.error("An error occurred:", error);
    
    // Display the error message and hide the weather information
    errorElement.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value;
  if (city) {
    checkWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

// You can call checkWeather initially with a default city name or location if needed.
// For example, you can provide a default city like New York:
// checkWeather("New York");
