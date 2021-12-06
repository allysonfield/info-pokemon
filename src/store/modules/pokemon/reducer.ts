import produce from 'immer';
import {PokemonProps} from '~/@types/interfaces';

type State = {
  pokemons: PokemonProps[];
  loading: boolean;
};

const INITIAL_STATE = {
  pokemons: [],
  loading: false,
} as State;

function baseReducer(initialState: State, methods: any) {
  return (
    state: State = initialState,
    action: {type: string; error: boolean},
  ) => {
    const method = methods[action.type];

    if (!method || action.error) {
      return state;
    }

    return method(state, action);
  };
}

const pokemonReducer = baseReducer(INITIAL_STATE, {
  ['@pokemon/CALL_LOAD'](state: State) {
    return produce(state, (draft: any) => {
      draft.loading = true;
    });
  },
  ['@pokemon/GET_POKEMON_LIST_FINISH'](state: State, {payload}: any) {
    return produce(state, (draft: State) => {
      draft.pokemons = payload;
      draft.loading = false;
    });
  },

  ['@pokemon/GET_POKEMON_LIST_LOAD_MORE_FINISH'](state: State, {payload}: any) {
    return produce(state, (draft: any) => {
      const newty = state.pokemons.concat(payload);
      const merge = newty.filter(
        (item, pos, arr) =>
          arr.findIndex(item2 => item2.name === item.name) === pos,
      );

      draft.pokemons = merge;
      draft.loading = false;
    });
  },
});

export default pokemonReducer;
