import {
  HANDLE_CHANGE,
  HANDLE_SUBMIT
} from "./pokemonTypes";
import axios from 'axios';


export const handleChange = (e) => {
  return {
    type: HANDLE_CHANGE,
    pokemon: e.target.value.toLowerCase()
  };
};

export const handleSubmit = (data) => {
  return {
    type: HANDLE_SUBMIT,
    pokemonData: data
  };
};

/*
export const getPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  return (dispatch) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(handleSubmit(data))
      }
      )
      .catch(error => {
        throw (error);
      });
  }
}
*/

export const getPokemon = (e, url) => {
  e.preventDefault();
  return (dispatch) => {
    return axios.get(url)
      .then(response => {
        dispatch(handleSubmit(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};