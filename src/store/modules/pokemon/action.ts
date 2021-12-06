export function pokemonListAction(payload: any) {
  return {
    type: '@pokemon/GET_POKEMON_LIST',
    payload,
  };
}

export function pokemonListFinishAction(payload: any) {
  return {
    type: '@pokemon/GET_POKEMON_LIST_FINISH',
    payload,
  };
}

export function pokemonListLoadMoreAction(payload: any) {
  return {
    type: '@pokemon/GET_POKEMON_LIST_LOAD_MORE',
    payload,
  };
}

export function pokemonListLoadMoreFinishAction(payload: any) {
  return {
    type: '@pokemon/GET_POKEMON_LIST_LOAD_MORE_FINISH',
    payload,
  };
}

export function pokemonLoadAction() {
  return {
    type: '@pokemon/CALL_LOAD',
  };
}
