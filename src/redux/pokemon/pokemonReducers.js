import {
  HANDLE_CHANGE,
  HANDLE_SUBMIT
} from "./pokemonTypes";

const initialState = {
  pokemon: "metapod",
  pokemonData: [],
  url: "https://pokeapi.co/api/v2/pokemon/metapod"
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      console.log(`https://pokeapi.co/api/v2/pokemon/${action.pokemon}`)
      return {
        ...state,
        pokemon: action.pokemon,
        url: `https://pokeapi.co/api/v2/pokemon/${action.pokemon}`,
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