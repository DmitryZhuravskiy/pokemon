"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _pokemonReducers = _interopRequireDefault(require("./pokemon/pokemonReducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  pokemon: _pokemonReducers["default"]
});
var _default = rootReducer;
exports["default"] = _default;