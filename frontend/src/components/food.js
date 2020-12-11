import React from 'react';
import axios from "axios";
import './meteo.css';

// Url API
const API_URL = "https://foodish-api.herokuapp.com/api/";

class Food extends React.Component {
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
        <div className="container conteneur">
            <div className="row text">
                <h3>Idées de recettes</h3>
            </div>

            <div className="row contenu">
                <img className="image" src={`${this.state.image}`}></img>
            </div>
        </div>
        

      
    )
  }
}
export default Food;