import React from 'react';
import './fonction.css';

function Fonction() {

  return(
    <div className="container fixe">
      <div id="bouton" className="row">
        <button onClick={()=> close()} id="fermer" className="">
          X
        </button>
      </div>
      <div className="row">
        <div className="col-6">
          <button onClick={()=> connexion()} id="" className="">
            Se connecter
          </button>
        </div>

        <div className="col-6">
          <button onClick={()=> creation()} id="" className="">
            Créer un compte
          </button>
        </div>
      </div>
    </div>

  );
}
export default Fonction;
        



export function close(){

}

export function connexion(){
  
}

export function creation(){
  
}







/*



      
          // Cette liaison est nécéssaire afin de permettre
          // l'utilisation de `this` dans la fonction de rappel.
          this.handleClick = this.handleClick.bind(this);
        }
      
        handleClick() {
          this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
        }
      
        render() {
          return (
            <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
          );
        }
}
 export default Function;
    */