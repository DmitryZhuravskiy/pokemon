import {
  HANDLE_CHANGE,
  HANDLE_SUBMIT
} from "./pokemonTypes";
import axios from 'axios';


export const handleChange = (e) => {
  return {
    type: HANDLE_CHANGE,
    pokemon: e.target.value.toLowerCase(),
    urlAdress: `https://pokeapi.co/api/v2/pokemon/${ e.target.value.toLowerCase() }`,
  };
};

export const handleSubmit = (data) => {
  return {
    type: HANDLE_SUBMIT,
    pokemonData: data,
  };
};

export const getPokemon = (e) => async dispatch => {
  e.preventDefault();
  const url = e.target.value;
  console.log(url);
  try {
    const res = await axios({
      baseURL: url,
      method: "GET"
    })
    dispatch(handleSubmit(res.data))
  } catch (err) {
    throw (err);
  }
}