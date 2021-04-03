import { connect } from 'react-redux';
import { handleChange, getPokemon, handleSubmit } from "../redux";
import React from 'react';

function PokedexContainer({ pokemon, pokemonData, urlAdress, handleChange, getPokemon, handleSubmit}) {
    return (<div className="pokedex">
        <form className="searching-form" onSubmit={(e) => getPokemon(e)} value={urlAdress}>
            <label>
                <input type="text" onChange={(e) => handleChange(e)}
                    placeholder="Enter a name of pokemon" value={pokemon} />
                <input type="submit" value="Give Me A Pokemon"/>
                <br />
            </label>
        </form>
        {
            pokemonData.map((data) => {
                return (
                    <div className="table-of-pokeData">
                        <img src={data.sprites["front_default"]} alt="front_default" />
                        <img src={data.sprites["back_shiny"]} alt="back_shiny" />
                        <img src={data.sprites["back_default"]} alt="back_default" />
                        <img src={data.sprites["front_shiny"]} alt="front_shiny" />
                        <div className="pokemon--property">
                            <h3>Type</h3>
                            <p>{data.type}</p>
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
                                <p>{a.ability.name} <span>{a["is_hidden"] ? "the ability is hidden" : "the ability is not hidden"}</span></p>
                            )
                            )}
                        </div>
                        <div className="pokemon--property">
                            <h3>Held Items</h3>
                            {data.held_items.map((a) => (
                                <p>{a.item.name}</p>
                            )
                            )}
                        </div>
                    </div>
                )
            })
        }
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon.pokemon,
        pokemonData: state.pokemon.pokemonData,
        urlAdress: state.pokemon.urlAdress,
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleChange: (e) => dispatch(handleChange(e)),
    getPokemon: (e) => dispatch(getPokemon(e)),
    handleSubmit: (pokemonData) => dispatch(handleSubmit(pokemonData)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokedexContainer);