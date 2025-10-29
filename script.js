async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '3a3b76dda33ef4f3f1944ddcc6730ace';  // ✅ Your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === '404') {
      alert('City not found! Please check spelling.');
      return;
    }

    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temp').innerText = `🌡️ Temperature: ${data.main.temp}°C`;
    document.getElementById('desc').innerText = `☁️ ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  } catch (error) {
    alert('Error fetching data. Please try again.');
    console.error(error);
  }
}