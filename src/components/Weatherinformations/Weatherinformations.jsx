import "./Weatherinformations.css";

function Weatherinformations({ weather }) {
  console.log(weather);
  return (
    <section class="main-info">
      <h3>
        <img src="/src/assets/icons/pin.png" alt="icone pin" />
        {weather.name}
      </h3>
      <div class="temp-now-info">
        <div class="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="icone que ilustra o clima atual"
          />
        </div>

        <div class="weather-temp-now">
          <p class="temp-C">
            {Math.round(weather.main.temp)}
            <p class="simbol">°C</p>
          </p>
          <p class="description">{weather.weather[0].description}</p>
        </div>
      </div>
      <div class="weather-statics">
        <div class="weather-info">
          <p>Sensação térmica: <br /><span>{Math.round(weather.main.feels_like)} <p>°C</p> </span></p>{" "}
        </div>
        <div class="weather-info">
          <p>Umidade: <br /> <span>{weather.main.humidity} <p>%</p> </span> </p>{" "}
        </div>
        <div class="weather-info">
          <p>Pressão: <br /> <span>{weather.main.pressure} <p>N/m²</p> </span>  </p>{" "}
        </div>
      </div>
    </section>
  );
}

export default Weatherinformations;
