import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

type TypeProps = {
  type: {
    name: string;
  };
};

type AbilityProps = {
  ability: {
    name: string;
  };
};

type HeldProps = {
  item: {
    name: string;
  };
};

type PokemonProps = {
  types: TypeProps[];
  height: number;
  weight: number;
  game_indices: string[];
  abilities: AbilityProps[];
  held_items: HeldProps[];
};

type StateProps = {
  pokemon: {
    pokemon: string;
    pokemonData: PokemonProps;
  };
  status: string
};





const initialState = {
  pokemon: "metapod",
  pokemonData: undefined,
  status: "success",
};

export const fetchPokemon = createAsyncThunk(
    "pokemon/fetchPokemon",
    async (pokemon: string) => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      return data;
    }
  );

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    changePokemon(state, action) {
      state.pokemon = (action.payload).toLowerCase();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.pokemonData = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPokemon.rejected, (state) => {
      state.pokemon = "";
      state.status = "error";
    });
  },
});

// Action creators are generated for each case reducer function
export const { changePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
