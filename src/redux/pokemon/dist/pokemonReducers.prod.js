"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _pokemonTypes=require("./pokemonTypes");function ownKeys(o,e){var t,r=Object.keys(o);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(o),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})),r.push.apply(r,t)),r}function _objectSpread(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(t,!0).forEach(function(e){_defineProperty(o,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):ownKeys(t).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))})}return o}function _defineProperty(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var initialState={pokemon:"metapod",pokemonData:[],url:"https://pokeapi.co/api/v2/pokemon/metapod"},pokemonReducer=function(e,o){var t=0<arguments.length&&void 0!==e?e:initialState,r=1<arguments.length?o:void 0;switch(r.type){case _pokemonTypes.HANDLE_CHANGE:return console.log("https://pokeapi.co/api/v2/pokemon/".concat(r.pokemon)),_objectSpread({},t,{pokemon:r.pokemon,url:"https://pokeapi.co/api/v2/pokemon/".concat(r.pokemon)});case _pokemonTypes.HANDLE_SUBMIT:return _objectSpread({},t,{pokemonData:r.pokemonData});default:return t}},_default=pokemonReducer;exports.default=pokemonReducer;