import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import {Meteo} from './widgets/meteo';
// import {Recipe} from './widgets/recette';

const axios = require('axios');

function App() {
  const [showAdmin, setAdmin] = useState(false);
  const [sexe, setSexe] = useState();
  const [weight, setWeight] = useState();
  const [sporttype, setSporttype] = useState();
  const [hoursSporttype, sethoursSporttype] = useState();
  const [daysPerWeek, setdaysPerWeek] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    axios.post('/form-submit', { sexe, weight, sporttype, hoursSporttype, daysPerWeek }) //weight, sporttype, hoursSporttype, daysPerWeek 
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const value = ["sexe", "weight", "sporttype", "hoursSporttype", "daysPerWeek"];
  //function handleValueChange(e){
  //  setWeight.Value[2](e.target.value);
  //}

  function handleSexeChange(e){
    setSexe(e.target.value);
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
        <Button className="m-2" onClick={() => setAdmin(!showAdmin)}>
          {showAdmin ? 'Back' : 'Login'}
        </Button>
        {//{showAdmin ?  <h3>    Please fill in the following form !</h3> : <p1></p1>}
        }   
      </Navbar>
      <div className="container mt-5">
      {showAdmin ?
      <div>
        <h3>Please fill in the following form.</h3>
        <Form.Group controlId="formBasicSexe">
            <Form.Label>Gender</Form.Label>
            {['Male', 'Female', 'Divers'].map(label => (
              <Form.Check
                key={label}
                id={label}
                type="radio"
                name="sexe"
                value={label}
                label={label}
                checked={sexe === label}
                onChange={handleSexeChange}
              />
            ))}
          </Form.Group>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicWeight">
              <Form.Label>Your weight</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Your weight"
                onChange={handleWeightChange}
              />
              <Form.Text className="text-muted">
              </Form.Text>
              <Form.Check label="Share this data with third parties."/>
            </Form.Group>
            <Form.Group controlId="formBasicSporttype">
              <Form.Label>Sporttype</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Sporttype"
                onChange={handleSporttypeChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSporttype">
              <Form.Label>How many hours you practiced this sporttype?</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Hours per Sporttype"
                onChange={handlehoursSporttypeChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSporttype">
              <Form.Label>How many days you practiced per week?</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Days per week" 
                onChange={handledaysPerWeekChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
          :
          <Jumbotron>
            <h1>Welcome</h1>
            <p>
              To use this site as an Admin, please log in by using the button in the top left corner.
            </p>
          </Jumbotron>
      }
      </div>
    </div>
  );
}

export default App;
