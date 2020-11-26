import './meteo.css';
import React from 'react';
import axios from "axios";

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/css/weather-icons.min.css";


export class Meteo extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      city:"paris"
    };
  }
  componentDidMount(){
    this.fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      /*const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = Meteo.getHTMLElementFromIcon(data.list[0].weather[0].icon);*/
      // Modifier le DOM
      /*in state schreiben*/
      this.state = {today_forecast_main:main}; /* ? */
      /*document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;*/
  })
}
  fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&cnt=4&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }

  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }

  render(){
    return(
      <div id="weather_wrapper">
	<div class="weatherCard">
		<div class="currentTemp">
			<span class="temp">23&deg;</span>
			<span class="location">{this.state.city}</span>
		</div>
		<div class="currentWeather">
			<span class="conditions">&#xf00d;</span>
			<div class="info">
				<span class="rain">1.3 MM</span>
				<span class="wind">10 MPH</span>
			</div>
		</div>
	</div>
</div>
    )
  }
}