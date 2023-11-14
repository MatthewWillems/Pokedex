import './App.css';
import { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [pokemonID, setPokemonID] = useState(1);

  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonID;

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(url)
      .then(response => response.json())
      .then(incomingData => {
        setData(incomingData);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      })
  }
  const onTextboxChange = (e) => {
    setPokemonID(e.target.value);
  }
  if (isLoading) {
    return (
      <div className='App'>
        Website is loading!
      </div>
    )
  } else {
    if (error) {
      return (
        <div className='App'>
          <div className='error'>
            Error!
          </div>
        </div>
      )
    } else if (data) {
      return (
        <>
        <div className='App'>
          <input type='text' id='pokemonid' name='pokemonid' onChange={onTextboxChange} />
          <button onClick={fetchData}> Search</button>
        </div>
        <div />
        <h1>Pokémon</h1>
        <Pokemon data={data} />
        </>
      )
    }
  }

}

export default App;
