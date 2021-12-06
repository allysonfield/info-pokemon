import {AxiosResponse} from 'axios';
import {all, takeLatest, call, put, select} from 'redux-saga/effects';
import api from '~/services/api';
import {
  pokemonListAction,
  pokemonListFinishAction,
  pokemonListLoadMoreAction,
  pokemonListLoadMoreFinishAction,
  pokemonLoadAction,
} from './action';

interface ResponseProps extends AxiosResponse {
  data: {results: []};
}

export function* getPokemonList({
  payload,
}: ReturnType<typeof pokemonListAction>) {
  const {limit, offset} = payload;
  try {
    yield put(pokemonLoadAction());
    const response: ResponseProps = yield call(() =>
      api.get(`/pokemon?limit=${limit}&offset=${offset}`),
    );
    console.log(response.data);
    yield put(pokemonListFinishAction(response.data.results));
  } catch (error) {
    console.log({error});
  }
}

export function* loadMore({
  payload,
}: ReturnType<typeof pokemonListLoadMoreFinishAction>) {
  const {limit, offset} = payload;
  try {
    yield put(pokemonLoadAction());
    const response: ResponseProps = yield call(() =>
      api.get(`/pokemon?limit=${limit}&offset=${offset}`),
    );
    console.log(response.data);
    yield put(pokemonListLoadMoreFinishAction(response.data.results));
  } catch (error) {
    console.log({error});
  }
}

export default all([
  takeLatest('@pokemon/GET_POKEMON_LIST', getPokemonList),
  takeLatest('@pokemon/GET_POKEMON_LIST_LOAD_MORE', loadMore),
]);
