import React from 'react';
import axios from "axios";
import './meteo.css';

// 1ERE IMAGE DU CAROUSEL
// Url API
const API_URL = "https://foodish-api.herokuapp.com/api/";


class Slide1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
    this.fetchTodayForecast = this.fetchTodayForecast.bind(this);
  }
  componentDidMount(){
    this.fetchTodayForecast()
    .then((response) => {
      // Récupère la donnée d'une API
      const data = response.data;
      // On récupère l'information principal
      const image = data.image;
      /*write information in state*/
      this.setState({image}); /* ? */
      console.log(image);
    })
  }

  fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.state}`, {
        crossdomain: true
    })
  }

  render(){
    return(
      <img className="image" alt="" src={`${this.state.image}`}></img>
    )
  }
}
export default Slide1;





// 2E IMAGE DU CAROUSEL
// Url API
const API_URL1 = "https://foodish-api.herokuapp.com/api/";

export class Slide2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
    this.fetchTodayForecast = this.fetchTodayForecast.bind(this);
  }
  componentDidMount(){
    this.fetchTodayForecast()
    .then((response) => {
      // Récupère la donnée d'une API
      const data = response.data;
      // On récupère l'information principal
      const image = data.image;
      /*write information in state*/
      this.setState({image}); /* ? */
      console.log(image);
  })
}

fetchTodayForecast(){
    return axios
    .get(`${API_URL1}?q=${this.state}`, {
        crossdomain: true
    })
}

render(){
    return(
      <img className="image" alt="" src={`${this.state.image}`}></img>
    )
  }
}



// 3E IMAGE DU CAROUSEL
// Url API
const API_URL2 = "https://foodish-api.herokuapp.com/api/";

export class Slide3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
    this.fetchTodayForecast = this.fetchTodayForecast.bind(this);
  }
  componentDidMount(){
    this.fetchTodayForecast()
    .then((response) => {
      // Récupère la donnée d'une API
      const data = response.data;
      // On récupère l'information principal
      const image = data.image;
      /*write information in state*/
      this.setState({image}); /* ? */
      console.log(image);
  })
  }

  fetchTodayForecast(){
    return axios
    .get(`${API_URL2}?q=${this.state}`, {
        crossdomain: true
    })
  }

  render(){
    return(
      <img className="image" alt="" src={`${this.state.image}`}></img>
    )
  }
}