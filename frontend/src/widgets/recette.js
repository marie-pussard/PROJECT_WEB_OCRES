import './recette.css';
import React from 'react';
import axios from "axios";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2";


export class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*city:"paris",
      lat:48.85,
      lon:2.35*/
    };
    this.fetchRecipe = this.fetchRecipe.bind(this);
  }
  componentDidMount(){
    this.fetchRecipe()
    .then((response) => {
      // Récupère la donnée d'une API
      const data = response.data;
      // On récupère l'information principal
      /*
      const main = data.weather[0].main;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const icon = data.weather[0].icon;
      const windspeed = data.wind.speed;
      /*write information in state*/
      /*this.setState({today_forecast_main:main}); /* ? */
      /*this.setState({temperature});
      this.setState({icon});
      this.setState({windspeed});
      this.setState({humidity});*/
      console.log(main);
  })
}
  fetchRecipe(){
    return axios
    .get(`${API_URL}`, {
    /*.get(`${API_URL}?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${API_KEY}`, {*/
      crossdomain: true
    })
  }

  getHTMLElementFromIcon(icon){
    //return `<img src=${API_URL}${icon}@2x.png class="weather-icon"/>`
  }

  render(){
    return(
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="..." alt="First slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide"></img>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
  }
}