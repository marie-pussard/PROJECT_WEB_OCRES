import React, { useState } from 'react';
import './index.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import Graph1 from './components/Graph1';
import Graph2 from './components/Graph2';
import Graph3 from './components/Graph3';
import Graph4 from './components/Graph4';
import Graph5 from './components/Graph5';
import Meteo from './components/meteo';
import Carousel from './components/carousel';


const axios = require('axios');

function App() {
  const [showAdmin, setAdmin] = useState(false);
  const [jour, setJour] = useState();
  const [hoursSporttype, sethoursSporttype] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    axios.post('/form-submit', { jour, hoursSporttype }) //weight, sporttype, hoursSporttype, daysPerWeek 
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  

  function handleJourChange(e){
    setJour(e.target.value);
  }
  
  function handlehoursSporttypeChange(e){
    sethoursSporttype(e.target.value);
  }

  return (
    <div>
      <Navbar className="header">
        <div className="col-4">
          <Button id="button" onClick={() => setAdmin(!showAdmin)}>
            {showAdmin ? 'Back' : 'Admin'}
          </Button>
        </div >
        <div className="col-8">
          Dashboard
        </div>
        </Navbar>
      {showAdmin ?
      
      <div>
        <h3>Please fill in the following form.</h3>
        <Form.Group controlId="Jours">
            <Form.Label>Jour de la semaine</Form.Label>
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
              <Form.Label>Combien d'heures de sport avez-vous pratiqué ce jour ?</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Hours per Sporttype"
                onChange={handlehoursSporttypeChange}
              />
            </Form.Group>
      </div>

          :
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

          
      }
      </div>
    
  );
}

export default App;
