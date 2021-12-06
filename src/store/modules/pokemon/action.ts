export function pokemonListAction(payload) {
  return {
    type: '@pokemon/GET_POKEMON_LIST',
    payload,
  };
}

export function pokemonListFinishAction(payload) {
  return {
    type: '@pokemon/GET_POKEMON_LIST_FINISH',
    payload,
  };
}
