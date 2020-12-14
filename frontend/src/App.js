import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import {Meteo} from './widgets/meteo';
//import {Recipe} from './widgets/recette';
import './index.css';
import Graph1 from './components/Graph1';
import Graph2 from './components/Graph2';
import Graph3 from './components/Graph3';
import Graph4 from './components/Graph4';
import Graph5 from './components/Graph5';
import Meteo from './components/meteo';
import Carousel from './components/carousel';
import Recipe from './components/recette';
import Function from './components/function'

const axios = require('axios');

function App() {
  const [showAdmin, setAdmin] = useState(false);
  const [jour, setJour] = useState();
  const [weight, setWeight] = useState();
  const [sporttype, setSporttype] = useState();
  const [hoursSporttype, sethoursSporttype] = useState();
  const [daysPerWeek, setdaysPerWeek] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    axios.post('/form-submit', { jour, weight, sporttype, hoursSporttype, daysPerWeek }) //weight, sporttype, hoursSporttype, daysPerWeek 
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  //const value = ["sexe", "weight", "sporttype", "hoursSporttype", "daysPerWeek"];
  //function handleValueChange(e){
  //  setWeight.Value[2](e.target.value);
  //}

  function handleJourChange(e){
    setJour(e.target.value);
  }
  function handleWeightChange(e){
    setWeight(e.target.value);
    //set.value[1](e.target.value);
  }
  function handleSporttypeChange(e){
    setSporttype(e.target.value);
  }
  function handlehoursSporttypeChange(e){
    sethoursSporttype(e.target.value);
  }
  function handledaysPerWeekChange(e){
    setdaysPerWeek(e.target.value);
  }

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Button className="m-2 col-1 buttonsize" onClick={() => setAdmin(!showAdmin)}>
          {showAdmin ? 'Back' : 'Login'}
        </Button>
        {//{showAdmin ?  <h3>    Please fill in the following form !</h3> : <p1></p1>}
        }
        <h3 className="titel col-11">Sport TECH</h3>
      </Navbar>
      <div className="container mt-5"></div>
      {showAdmin ?
      <div>
        <h3>Please fill in the following form.</h3>
        <Form.Group controlId="Jours">
          <Form.Label>Jour de semaine</Form.Label>
          {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(label => (
            <Form.Check
              key={label}
              id={label}
              type="radio"
              name="Jours"
              value={label}
              label={label}
              checked={jour === label}
              onChange={handleJourChange}
            />
          ))}
        </Form.Group>
        <Form.Group controlId="formBasicSporttype">
          <Form.Label>Combien de temps vous avez practiquez du sport?</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Heures de pratique"
            onChange={handlehoursSporttypeChange}
          />
        </Form.Group>
      </div>
      :
      <div> 
        <header className="header" id="bjr">
          <div className="row pomme">
            <h1 className="col-10">Dashboard</h1>
              <div className="col-2">
                {/* <button onClick={(e) => window.screen.}>Supprimer la ligne</button> */}
                {/* <img alt="" src="icon.png" class="icon"/> */}
              </div>
          </div>
        </header>

        <div className="row" >
          <div className="col-sm-12 col-md-12 col-lg-9 linear-gradient">
            
            <div className="row graph">
              <div className="col-xs-12 col-sm-9 graph">
                <Graph1></Graph1>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-6 graph">
                <Graph2></Graph2>
              </div>

              <div className="col-xs-12 col-sm-6 graph">
                <Graph3></Graph3>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-6 graph">
                <Graph4></Graph4>
              </div>

              <div className="col-xs-12 col-sm-6 graph">
                <Graph5></Graph5>
              </div>
            </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-3 backColor">
          <div className="row graph">
            <Meteo className="meteo"></Meteo>
          </div>

          <div className="row graph">
            <Carousel></Carousel>      
          </div>
        </div>
        </div>

          {/* <Jumbotron>
            <h1>Welcome</h1>
            <p>
              To use this site as an Admin, please log in by using the button in the top left corner.
            </p>
          </Jumbotron>*/}
      </div>
      }
    </div>
    
  );
}

export default App;
