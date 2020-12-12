/*
import React from 'react';
import axios from "axios";
import CanvasJSReact from '../canvasjs.react';
import './meteo.css';

import Slide2 from './slide';
import Food from './slide';

//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const API_URL = "https://foodish-api.herokuapp.com/api/";

export class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    }
    this.fetchTodayForecast = this.fetchTodayForecast.bind(this);
  }

  componentDidMount(){
    this.fetchTodayForecast()
    .then((response) => {
      // Récupère la donnée d'une API
      const data = response.data;
      // On récupère l'information principal
      const slide1 = data.image;
      const slide2 = data.image;
      const slide3 = data.image;
      
      /*write information in state*/
      /*
      this.setState({slide1});
      this.setState({slide2});
      this.setState({slide3});
      //Affiche de l'url dans la console
      console.log(slide1);
      console.log(slide2);
      console.log(slide3);
  })
}*/

/*
  fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.state}`, {
        crossdomain: true
    })
  }

  render(){
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 image" alt="1 slide" src={`${this.state.slide1}`}></img>
          </div>
          <div className="carousel-item">
            <Slide2></Slide2>
          </div>
          <div className="carousel-item">
            <Food></Food>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    )
  }
}

  export default Recipe;



*/