import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon, changePokemon } from "../redux/slices/pokemonSlice";
import { useEffect } from "react";

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
};

function PokedexContainer() {
  const dispatch = useDispatch();
  const { pokemon, pokemonData } = useSelector(
    (state: StateProps) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemon(pokemon));
  }, []);

  return (
    <div className="pokedex">
      <div>
        <label>
          <input
            type="text"
            onChange={(e) => dispatch(changePokemon(e.target.value))}
            placeholder="Enter a name of pokemon"
            value={pokemon}
          />
        </label>
        <div onClick={() => dispatch(fetchPokemon(pokemon))}> Отправить запрос</div>
      </div>
      {pokemonData !== undefined && (
        <div className="table-of-pokeData">
          <div className="pokemon--property">
            <h3>Type</h3>
            {pokemonData.types.map((type) => (
              <p>{type.type.name}</p>
            ))}
          </div>
          <div className="pokemon--property">
            <h3>Height</h3>
            <p>{Math.round(pokemonData.height) * 0.1} metres</p>
          </div>
          <div className="pokemon--property">
            <h3>Weight</h3>
            <p>{Math.round(pokemonData.weight) * 0.1} kg</p>
          </div>
          <div className="pokemon--property">
            <h3>Number of Battles</h3>
            <p>{pokemonData.game_indices.length} battles</p>
          </div>
          <div className="pokemon--property">
            <h3>Ability</h3>
            {pokemonData.abilities.map((a) => (
              <p>{a.ability.name}</p>
            ))}
          </div>
          <div className="pokemon--property">
            <h3>Held Items</h3>
            {pokemonData.held_items.map((a) => (
              <p>{a.item.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokedexContainer;

{
  /*
    
     <div className="table-of-pokeData">
          <img src={pokemonData.sprites["front_default"]} alt="front_default" />
          <img src={pokemonData.sprites["back_shiny"]} alt="back_shiny" />
          <img src={pokemonData.sprites["back_default"]} alt="back_default" />
          <img src={pokemonData.sprites["front_shiny"]} alt="front_shiny" />
          <div className="pokemon--property">
            <h3>Type</h3>
            <p>{pokemonData.type}</p>
          </div>
          <div className="pokemon--property">
            <h3>Height</h3>
            <p>{Math.round(data.height) * 0.1} metres</p>
          </div>
          <div className="pokemon--property">
            <h3>Weight</h3>
            <p>{Math.round(data.weight) * 0.1} kg</p>
          </div>
          <div className="pokemon--property">
            <h3>Number of Battles</h3>
            <p>{data.game_indices.length} battles</p>
          </div>
          <div className="pokemon--property">
            <h3>Ability</h3>
            {data.abilities.map((a) => (
              <p>
                {a.ability.name}{" "}
                <span>
                  {a["is_hidden"]
                    ? "the ability is hidden"
                    : "the ability is not hidden"}
                </span>
              </p>
            ))}
          </div>
          <div className="pokemon--property">
            <h3>Held Items</h3>
            {data.held_items.map((a) => (
              <p>{a.item.name}</p>
            ))}
          </div>
        </div>
    
    */
}
