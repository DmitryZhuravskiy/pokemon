import {
HANDLE_CHANGE,
HANDLE_SUBMIT
} from "./pokemonTypes";

const initialState = {
  pokemon: "pikachu",
  pokemonData: [],
  pokemonType: "",
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
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