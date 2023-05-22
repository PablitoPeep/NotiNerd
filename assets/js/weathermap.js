const api_key = 'cfd77f2e4d3a5ba717a1c8d53be0f221'; 
async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&appid=${api_key}&units=metric`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
function showWeather(weatherData) {
  const temperature = document.querySelector('#temperature');
  const description = document.querySelector('#description');
  const humidity = document.querySelector('#humidity');
  temperature.innerText = weatherData.main.temp;
  description.innerText = weatherData.weather[0].description;
  humidity.innerText = weatherData.main.humidity;
}
window.addEventListener('load', async () => {
  const weatherData = await getWeather();
  showWeather(weatherData);
});
