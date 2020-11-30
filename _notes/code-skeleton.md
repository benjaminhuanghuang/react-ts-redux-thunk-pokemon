## Store
```
  import {createStore, applyMiddleware} from "redux";
  import RootReducer from "./reducers/RootReducer";
  import {composeWithDevTools} from "redux-devtools-extension";
  import thunk from "redux-thunk";

  const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

  export type RootStore = ReturnType<typeof RootReducer>

  export default Store
```


## reducer

RootReducer
```
  import {combineReducers} from "redux";
  import pokemonReducer from "./PokemonReducer";

  const RootReducer = combineReducers({
    pokemon: pokemonReducer
  });

  export default RootReducer
```
PokemonReducer
```
  interface PokemonState {

  }

  const defaultState: PokemonState = {
  
  };

  const pokemonReducer = (state: PokemonState = defaultState, action: PokemonDispatchTypes) : PokemonState => {
    switch (action.type) {
      default:
        return state
    }
  };
```
## Action
```
// Type Name
export const POKEMON_LOADING = "POKEMON_LOADING";

// Payload type
export type PokemonType = {
  abilities: PokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStat[]
}


// Dispatch types
export interface PokemonLoading {
  type: typeof POKEMON_LOADING
}

// Export all action types
export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess



// Actions
import { Dispatch } from "redux";

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {

}
```


## index.tsx
```
  import { Provider } from "react-redux";
  import store from "./Store";

  <Provider store={store}>
    <App />
  </Provider>,
```


