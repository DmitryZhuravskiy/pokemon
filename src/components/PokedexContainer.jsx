import { connect } from 'react-redux';
import { handleSubmit, handleChange } from "../redux";
import { getPokemon } from "../redux/asyncActions/getPokemon";
import React from 'react';

class PokedexContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: this.props.pokemon,
            pokemonData: this.props.pokemonData,
            pokemonType: this.props.pokemonType,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getPokemon = this.getPokemon.bind(this);
    }

    render() {
        return (    <div className="pokedex">
            <form onSubmit={() => dispatch(getPokemon(this.state.pokemon))}>
                <label>
                <input type="text" onChange={() => handleChange(e)} placeholder="Enter a name of pokemon" />
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
                        <p>{pokemonType}</p>
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon.pokemon,
        pokemonData: state.pokemon.pokemonData,
        pokemonType: state.pokemon.pokemonType,
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (e) => dispatch(handleSubmit(e)),
    handleChange: (e) => dispatch(handleChange(e)),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokedexContainer);