import {
  HANDLE_CHANGE,
  HANDLE_SUBMIT
} from "./pokemonTypes";

const initialState = {
  pokemon: "metapod",
  pokemonData: [],
  urlAdress: `https://pokeapi.co/api/v2/pokemon/metapod`
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        urlAdress: `https://pokeapi.co/api/v2/pokemon/${action.pokemon}`,
        pokemon: action.pokemon,
      };

    case HANDLE_SUBMIT:
      return {
        ...state,
        pokemonData: action.pokemonData,
      };

    default:
      return state;
  }
}

export default pokemonReducer;