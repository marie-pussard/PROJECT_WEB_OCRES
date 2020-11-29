import './recette.css';
import React from 'react';
import axios from "axios";
//import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const API_KEY = "516eb264698844f582cdb9bc1277dd93";
const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
//const API_URL = "https://api.spoonacular.com/recipes/716429/information";
const API_IMAGE_URL = "https://spoonacular.com/recipeImages/";


export class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidenumber:1
    };
    this.fetchRecipe = this.fetchRecipe.bind(this);
  }
  componentDidMount(){
    this.fetchRecipe()
    .then((response) => {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);
      
      // On récupère l'information
      const titleOne = data.results[0].title;
      const titleTwo = data.results[1].title;
      const titleThree = data.results[2].title;
      //const recipeIdOne = data.results[0].id;
      //const recipeIdTwo = data.results[1].id;
      //const recipeIdThree = data.results[2].id;
      const imageURLone = data.results[0].image;
      const imageURLtwo = data.results[1].image;
      const imageURLthree = data.results[2].image;

      const descriptionOne = data.results[0]
      //const nutOne = data.results[0].nutrition.nutirents[0].title;
      const CaloriesOne = data.results[0].nutrition.nutrients[0].amount;
      const CaloriesOneUnit = data.results[0].nutrition.nutrients[0].unit;
      const CaloriesTwo = data.results[1].nutrition.nutrients[0].amount;
      const CaloriesTwoUnit = data.results[1].nutrition.nutrients[0].unit;
      const CaloriesThree = data.results[2].nutrition.nutrients[0].amount;
      const CaloriesThreeUnit = data.results[2].nutrition.nutrients[0].unit;

      const ProteinOne = data.results[0].nutrition.nutrients[1].amount;
      const ProteinOneUnit = data.results[0].nutrition.nutrients[1].unit;
      const ProteinTwo = data.results[1].nutrition.nutrients[1].amount;
      const ProteinTwoUnit = data.results[1].nutrition.nutrients[1].unit;
      const ProteinThree = data.results[2].nutrition.nutrients[1].amount;
      const ProteinThreeUnit = data.results[2].nutrition.nutrients[1].unit;

      const FatOne = data.results[0].nutrition.nutrients[2].amount;
      const FatOneUnit = data.results[0].nutrition.nutrients[2].unit;
      const FatTwo = data.results[1].nutrition.nutrients[2].amount;
      const FatTwoUnit = data.results[1].nutrition.nutrients[2].unit;
      const FatThree = data.results[2].nutrition.nutrients[2].amount;
      const FatThreeUnit = data.results[2].nutrition.nutrients[2].unit;

      const SugarOne = data.results[0].nutrition.nutrients[3].amount;
      const SugarOneUnit = data.results[0].nutrition.nutrients[3].unit;
      const SugarTwo = data.results[1].nutrition.nutrients[3].amount;
      const SugarTwoUnit = data.results[1].nutrition.nutrients[3].unit;
      const SugarThree = data.results[2].nutrition.nutrients[3].amount;
      const SugarThreeUnit = data.results[2].nutrition.nutrients[3].unit;
  
      this.setState({titleOne});
      this.setState({titleTwo});
      this.setState({titleThree});

      this.setState({CaloriesOne});
      this.setState({CaloriesOneUnit});
      this.setState({CaloriesTwo});
      this.setState({CaloriesTwoUnit});
      this.setState({CaloriesThree});
      this.setState({CaloriesThreeUnit});

      this.setState({ProteinOne});
      this.setState({ProteinOneUnit});
      this.setState({ProteinTwo});
      this.setState({ProteinTwoUnit});
      this.setState({ProteinThree});
      this.setState({ProteinThreeUnit});

      this.setState({FatOne});
      this.setState({FatOneUnit});
      this.setState({FatTwo});
      this.setState({FatTwoUnit});
      this.setState({FatThree});
      this.setState({FatThreeUnit});

      this.setState({SugarOne});
      this.setState({SugarOneUnit});
      this.setState({SugarTwo});
      this.setState({SugarTwoUnit});
      this.setState({SugarThree});
      this.setState({SugarThreeUnit});

      this.setState({imageURLone});
      this.setState({imageURLtwo});
      this.setState({imageURLthree});
      //console.log(title);
  })
}
  fetchRecipe(){
    return axios
    //assemble API with Key and set nutrition parameters
   // .get(`${API_URL}?apiKey=${API_KEY}&includeNutrition=true`, {
      .get(`${API_URL}?apiKey=${API_KEY}&maxFat=25&maxSugar=30&minProtein=25&maxCalories=600&number=3`, {
      crossdomain: true
    })
  }

  getHTMLElementFromImage(image){
    //return `<img src=${API_IMAGE_URL}${recipeID}-312x231@2x.jpg class="weather-icon"/>`
  }
  
  Slidebutton(props){
  return(
    <button className="slidebutton" onClick={props.onclick}></button>
  )
}



  render(){
    return(
      <div>
 <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <span className="titel">{this.state.titleOne}</span>
          <span className="conditions"><img src={`${this.state.imageURLone}`}></img></span>
          <img className="d-block w-100" src="..." alt="First slide"></img>
        </div>
        <div className="carousel-item">
        <span className="titel">{this.state.titleTwo}</span>
        <span className="conditions"><img src={`${this.state.imageURLtwo}`}></img></span>
          <img className="d-block w-100" src="..." alt="Second slide"></img>
        </div>
        <div className="carousel-item">
        <span className="titel">{this.state.titleThree}</span>
        <span className="conditions"><img src={`${this.state.imageURLthree}`}></img></span>
          <img className="d-block w-100" src="..." alt="Third slide"></img>
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
    </div>
  
    )
  }
}