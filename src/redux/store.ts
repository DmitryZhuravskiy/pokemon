import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./slices/pokemonSlice";

const store = configureStore({
  reducer: {
    pokemon,
  },
});

export default store;
