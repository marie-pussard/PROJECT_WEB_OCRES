
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const API_KEY = "afcaada881f54b3e87dac57c23cff390";
const API_URL = "https://api.spoonacular.com/recipes/random";
//const API_URL = "https://api.spoonacular.com/recipes/716429/information";
// const API_IMAGE_URL = "https://spoonacular.com/recipeImages/";

//https://api.spoonacular.com/recipes/complexSearch

export class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRecipe: 0,
      recipes: [
        {
        title: 'Salade Fitness',
        image: 'http://www.galerie-imagine.fr/images/image-de-repas_3.jpg',
        calories: 800,
        protein: 60,
        fat: 300,
        sugar: 80,
        },
        {
        title: 'Salade aux oeufs et tomates',
        image: 'http://www.galerie-imagine.fr/images/image-de-repas_9.jpg',
        calories: 700,
        protein: 80,
        fat: 360,
        sugar: 180,
        },
        {
        title: '',
        image: 'http://www.galerie-imagine.fr/images/image-de-repas_9.jpg',
        calories: 700,
        protein: 80,
        fat: 360,
        sugar: 180,
        },

    ]
     }
    this.fetchRecipe = this.fetchRecipe.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  writeRecipesToState(result){
    const newRecipe = {
      title: result.title,
      image: result.image,
      calories: result.nutrition.nutrients[0].amount,
      protein: result.nutrition.nutrients[1].amount,
      fat: result.nutrition.nutrients[2].amount,
      sugar: result.nutrition.nutrients[3].amount,
    }
    this.setState({
      recipes: [
        ...this.state.recipes,
        newRecipe
      ]
    })
  }

  componentDidMount(){
    this.fetchRecipe()
    .then((response) => {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      for(const result in data.results) {
        this.writeRecipesToState(result);
      }
      console.log(this.state);
  })
  .catch(console.error);
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
  
  handleSelect(activeRecipe, e) {
    this.setState({activeRecipe});
  };

  render(){
    return (
      <div>
      <Carousel activeIndex={this.state.activeRecipe} onSelect={this.handleSelect}>
      {this.state.recipes.map((recipe, index) => {
        const options = {
          // title: {
          //   text: "Basic Column Chart in React"
          // },
          data: [{				
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.0\"g\"",
            indexLabel: "{label} {y}",
            dataPoints: [
              {y: recipe.protein, label: "Protéines"},
              {y: recipe.fat, label: "Gras"},
              {y: recipe.sugar, label: "Sucre"},
            ]
           }]
          }
        return (
        <Carousel.Item key={recipe.title}>
          <div className="d-flex flex-row container">
            <div className="recipe-img">
              <img
                  src={recipe.image}
                  alt={recipe.title}
                />
            </div>
            
            <div className="recipe-chart">
              <CanvasJSChart options = {options}></CanvasJSChart>
            </div>
          </div>
         
          <Carousel.Caption>
            <h3>{recipe.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      )}
      )}
      </Carousel>
    </div> 
    )
  }
}

export default Recipe;
