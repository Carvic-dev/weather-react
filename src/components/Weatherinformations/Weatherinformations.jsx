
import './Weatherinformations.css'

function Weatherinformations({ weather }) {
  console.log(weather)
  return (
    <section class="main-info">
      <h3 class='location'><img src="/src/assets/icons/location.svg" alt="icone pin" />{weather.name}</h3>

      <div class='weater-icon'>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="icone que ilustra o clima atual"
        />
      </div>
      <div class='weather-temp-now'>
        <p class='temp-C'>{Math.round(weather.main.temp)}<p>°C</p></p>
        <p class='description'>{weather.weather[0].description}</p></div>

      <div class="weater-statics">
        <div class='weater-info-01'>
        <p>Sensação térmica: {Math.round(weather.main.feels_like)} </p> </div>
        <div class='weater-info-02'>
        <p>Umidade: {weather.main.humidity} </p> </div>
        <div class='weater-info-03'>
        <p>Pressão: {weather.main.pressure} </p> </div>
      </div>
    </section>
  );
}

export default Weatherinformations;
