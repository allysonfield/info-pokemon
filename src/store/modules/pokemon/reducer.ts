import produce from 'immer';

type PayloadProps = {
  data: any[];
};
interface ActionProps {
  type: string;
  payload: any[];
}

const INITIAL_STATE = {
  pokemons: [],
  loading: false,
};

function baseReducer(initialState, methods) {
  return (state = initialState, action) => {
    const method = methods[action.type];

    if (!method || action.error) {
      return state;
    }

    return method(state, action);
  };
}

const pokemonReducer = baseReducer(INITIAL_STATE, {
  ['@pokemon/CALL_LOAD'](state, {payload}) {
    return produce(state, (draft: any) => {
      draft.loading = true;
    });
  },
  ['@pokemon/GET_POKEMON_LIST_FINISH'](state, {payload}) {
    return produce(state, (draft: any) => {
      draft.pokemons = payload;
      draft.loading = false;
    });
  },

  ['@pokemon/GET_POKEMON_LIST_LOAD_MORE_FINISH'](state, {payload}) {
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
