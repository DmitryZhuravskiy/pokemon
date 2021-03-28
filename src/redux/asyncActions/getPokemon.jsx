import { handleSubmit } from "../redux";

 export const getPokemon = async (pokemon) => {
    return function(dispatch) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const toArray = [];
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(handleSubmit(toArray))
    }
}

