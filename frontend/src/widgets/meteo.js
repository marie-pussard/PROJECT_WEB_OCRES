import './meteo.css';
import React from 'react';
import axios from "axios";

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
/*const API_URL = "https://api.openweathermap.org/data/2.5/onecall";*/
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/css/weather-icons.min.css";


export class Meteo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city:"paris",
      lat:48.85,
      lon:2.35
    };
    this.fetchTodayForecast = this.fetchTodayForecast.bind(this);
  }
  componentDidMount(){
    this.fetchTodayForecast()
    .then((response) => {
      // Récupère la donnée d'une API
      const data = response.data;
      // On récupère l'information principal
      const main = data.weather[0].main;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const icon = data.weather[0].icon;
      const windspeed = data.wind.speed;
      /*const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = Meteo.getHTMLElementFromIcon(data.list[0].weather[0].icon);*/
      // Modifier le DOM
      /*in state schreiben*/
      this.setState({today_forecast_main:main}); /* ? */
      this.setState({temperature});
      this.setState({icon});
      this.setState({windspeed});
      this.setState({humidity});
      console.log(main);
      /*document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;*/
  })
}
  fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.state.city}&cnt=4&units=metric&appid=${API_KEY}`, {
    /*.get(`${API_URL}?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${API_KEY}`, {*/
      crossdomain: true
    })
  }

  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }

  render(){
    return(
      <div id="weather_wrapper">
	<div className="weatherCard">
		<div className="currentTemp">
			<span className="temp">{Math.round(this.state.temperature)}&deg;</span>
			<span className="location">{this.state.city}</span>
		</div>
		<div className="currentWeather">
			<span className="conditions"><img src={`http://openweathermap.org/img/wn/${this.state.icon}@4x.png`}></img></span>
			<div className="info">
				<span className="rain">{this.state.humidity} %</span>
				<span className="wind">{this.state.windspeed} Mph</span>
			</div>
		</div>
	</div>
</div>
    )
  }
}