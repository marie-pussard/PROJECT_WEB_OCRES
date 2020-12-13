
import React from 'react';
import './meteo.css';

import Slide1 from './slide';
import Slide2 from './slide';
import Slide3 from './slide';


class Carousel extends React.Component {
    
  render(){
    return (

      <div className="container couleurFond">
        <div className="row text">
            <h3>Idées de recettes</h3>
        </div>
        <div className="row contenu">

          
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Slide1></Slide1>
              </div>
              <div className="carousel-item">
                <Slide2></Slide2>
              </div>
              <div className="carousel-item">
                <Slide3></Slide3>
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
      </div>









      
    )
  }
}
  export default Carousel;

