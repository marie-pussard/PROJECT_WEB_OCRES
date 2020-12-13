import './fonction.css'
import React from "react";
//import Popup from "reactjs-popup";

class Test extends React.Component {
  constructor(props) {
    super(props);
    //initialise l'état sur OFF
    this.state = {isToggleOn: false};

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      //inverse l'état du bouton lorsqu'on clique dessus
      isToggleOn: !state.isToggleOn
    }));
  }


  render() {
    return (
      <button onClick={this.handleClick}>
        <img alt="" src="icon.png" className="icon"/>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>




    );
  }
} export default Test;

export function Aled(){

  return(
 <div>
   <h1>
     aloooooooooooo
   </h1>
 </div>
  );
}