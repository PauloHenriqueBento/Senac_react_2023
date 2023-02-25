import React from "react";
import Card from "./components/pokemon/card";

var pokemonNumber = 1;
function App() {
  const [pokemon, setPokemon] = React.useState({});
  function Carregar() {
    console.log(pokemonNumber)
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
      });
  }

  function Proximo() {
    pokemonNumber++
    Carregar()
  }
  function Anterior() {
    if(pokemonNumber > 1){
      pokemonNumber--
    }
    Carregar()
  }

  return (
    pokemon.sprites ?
      <div className="container" style={{height: "100vh"}}>
        <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
         <Card
         pokemon = {pokemon}
         />
          <div className="row mt-3">
            <div className="col-6">
              <button type="button" className="btn btn-secondary" onClick={Anterior}>Anterior</button>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-primary" onClick={Proximo}>Próximo</button>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="container">
        <button onClick={Carregar}>Carregar</button>
      </div>
  );
}

export default App;