"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSubmit = exports.handleChange = void 0;

var _pokemonTypes = require("./pokemonTypes");

var handleChange = function handleChange(e) {
  return {
    type: _pokemonTypes.HANDLE_CHANGE,
    pokemon: e.target.value.toLowerCase()
  };
};

exports.handleChange = handleChange;

var handleSubmit = function handleSubmit(payload) {
  return {
    type: _pokemonTypes.HANDLE_SUBMIT,
    pokemonData: payload
  };
};

exports.handleSubmit = handleSubmit;