import { useState } from "react";
import axios from "axios";
export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  let apiKey = "8701153725c9af84bc25fc5d98176cc0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&apid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  function updateWeather(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        onChange={updateWeather}
        type="search"
        placeholder="Search for a city..."
      />
      <input type="submit" value="Search" />
    </form>
  );
 if (loaded) {
  return (
    {form}
<ul>
<li>Temperature: {Math.round(weather.temperature)}° C</li>
      <li>Description: {weather.description}</li>
      <li>Wind: {weather.wind} km/h </li>
      <li>Humidity: {weather.humidity} % </li>
</ul>
   
  );
} else {
  return form;
}
}
