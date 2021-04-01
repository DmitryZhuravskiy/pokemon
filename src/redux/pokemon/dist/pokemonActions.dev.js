"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPokemon = exports.handleSubmit = exports.handleChange = void 0;

var _pokemonTypes = require("./pokemonTypes");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleChange = function handleChange(e) {
  return {
    type: _pokemonTypes.HANDLE_CHANGE,
    pokemon: e.target.value.toLowerCase()
  };
};

exports.handleChange = handleChange;

var handleSubmit = function handleSubmit(data) {
  return {
    type: _pokemonTypes.HANDLE_SUBMIT,
    pokemonData: data
  };
};
/*
export const getPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  return (dispatch) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(handleSubmit(data))
      }
      )
      .catch(error => {
        throw (error);
      });
  }
}
*/


exports.handleSubmit = handleSubmit;

var getPokemon = function getPokemon(e, url) {
  e.preventDefault();
  return function (dispatch) {
    return _axios["default"].get(url).then(function (response) {
      dispatch(handleSubmit(response.data));
    })["catch"](function (error) {
      throw error;
    });
  };
};

exports.getPokemon = getPokemon;