import './meteo.css';
import React from 'react';
import axios from "axios";
import './meteo.css';

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
      /*write information in state*/
      this.setState({today_forecast_main:main}); /* ? */
      this.setState({temperature});
      this.setState({icon});
      this.setState({windspeed});
      this.setState({humidity});
      console.log(main);
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

      <div className="container col-md-4 col-sm-3" >
        <div className="row">
          <div className="col-6">
            <img className="conditions" alt="" src={`http://openweathermap.org/img/wn/${this.state.icon}@4x.png`}></img>
          </div>

          <div className="col-6">
            <div className="row temperature">
              <span>{Math.round(this.state.temperature)}&deg;</span>
            </div>

            <div className="row ville">
              <span>{this.state.city}</span>
            </div> 
          </div>
        </div>

        <div className="row rowstyle">
          <div className="col-6 wind">
            <span>{this.state.windspeed} Mph</span>
          </div>

          <div className="col-6 rain">
            <span>{this.state.humidity} %</span>
          </div>
        </div>
      </div>

      
    )
  }
}
export default Meteo;