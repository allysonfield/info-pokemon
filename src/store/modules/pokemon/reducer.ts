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
};

export default function pokemon(state = INITIAL_STATE, action: ActionProps) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pokemon/GET_POKEMON_LIST_FINISH':
        draft.pokemons = action.payload;
        break;

      default:
        return state;
    }
  });
}
