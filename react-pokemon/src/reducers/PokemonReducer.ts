import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  PokemonDispatchTypes,
  PokemonType
} from "../actions/PokemonActionTypes";

interface PokemonState {
  loading: boolean,
  pokemon?: PokemonType
}

const defaultState: PokemonState = {
  loading: false
};

const pokemonReducer = (state: PokemonState = defaultState, action: PokemonDispatchTypes) : PokemonState => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        loading: false,
      }
    case POKEMON_LOADING:
      return {
        loading: true,
      }
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload
      }
    default:
      return state
  }
};


export default pokemonReducer