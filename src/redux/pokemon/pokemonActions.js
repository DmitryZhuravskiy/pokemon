import {
HANDLE_CHANGE,
HANDLE_SUBMIT
} from "./pokemonTypes";

export const handleChange = (e) => {
  return {
    type: HANDLE_CHANGE,
    pokemon: e.target.value.toLowerCase()
  };
};

export const handleSubmit = (payload) => {
  return {
    type: HANDLE_SUBMIT,
    pokemonData: payload
  };
};
