import React from 'react';
import axios from "axios";
import React, { useState } from 'react';
import { ReadSyncOptions } from 'fs';

interface DataArray {
  abilities: Array<any>;
  base_experience: number;
  forms: Array<any>;
  game_indices: Array<any>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<any>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: Array<any>;
  sprites: Array<any>;
  stats: Array<any>;
  types: Array<any>;
  weight: number;
}

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<string>("pikachu");
  const [pokemonData, setPokemonData] = useState < DataArray || [] > ([]);
  const [pokemonType, setPokemonType] = useState<string>("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
    }
  };

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setPokemon(e.target.value.toLowerCase());
  }

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getPokemon();
  }

  return (
    <div className="App" >
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} placeholder="Enter a name of pokemon" />
        </label>
        < /form>
        {
          pokemonData.map((data) => {
            return (
              <div className="table-of-pokeData" >
                <img src={data.sprites["front_default"]} alt="front_default" />
                <img src={data.sprites["back_shiny"]} alt="back_shiny" />
                <img src={data.sprites["back_default"]} alt="back_default" />
                <img src={data.sprites["front_shiny"]} alt="front_shiny" />
                <div className="pokemon--property" >
                  <h3>Type < /h3>
                    < p > {pokemonType} < /p>
                      < /div>
                      < div className="pokemon--property" >
                        <h3>Height < /h3>
                          < p > {Math.round(data.height) * 0.1} metres < /p>
                            < /div>
                            < div className="pokemon--property" >
                              <h3>Weight < /h3>
                                < p > {Math.round(data.weight) * 0.1} kg < /p>
                                  < /div>
                                  < div className="pokemon--property" >
                                    <h3>Number of Battles < /h3>
                                      < p > {data.game_indices.length} battles < /p>
                                        < /div>
                                        < div className="pokemon--property" >
                                          <h3>Ability < /h3>
                                            {
                                              data.abilities.map((a) => (
          <p>{ a.ability.name } < span > { a["is_hidden"]? "the ability is hidden" : "the ability is not hidden"} < /span></p >
                )
        )
      }
      </div>
        < div className = "pokemon--property" >
          <h3>Held Items < /h3>
      {
        data.held_items.map((a) => (
          <p>{ a.item.name } < /p>
        )
        )
      }
      </div>
        < /div>
          )
  })
}
</div>
  );
}

export default App;