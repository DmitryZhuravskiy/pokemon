"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _pokemonTypes=require("./pokemonTypes");function ownKeys(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)),o}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var initialState={pokemon:"pikachu",pokemonData:[],pokemonType:""},pokemonReducer=function(e,t){var r=0<arguments.length&&void 0!==e?e:initialState,o=1<arguments.length?t:void 0;switch(o.type){case _pokemonTypes.HANDLE_CHANGE:return _objectSpread({},r,{pokemon:o.pokemon});case _pokemonTypes.HANDLE_SUBMIT:return _objectSpread({},r,{pokemonData:o.pokemonData});default:return r}},_default=pokemonReducer;exports.default=pokemonReducer;