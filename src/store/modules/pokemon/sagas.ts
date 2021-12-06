import {AxiosResponse} from 'axios';
import {all, takeLatest, call, put, select} from 'redux-saga/effects';
import api from '~/services/api';
import {pokemonListAction, pokemonListFinishAction} from './action';

interface ResponseProps extends AxiosResponse {
  data: {results: []};
}

export function* getPokemonList({
  payload,
}: ReturnType<typeof pokemonListAction>) {
  const {limit, offset} = payload;
  try {
    const response: ResponseProps = yield call(() =>
      api.get(`/pokemon?limit=${limit}&offset=${offset}`),
    );
    console.log(response.data);
    yield put(pokemonListFinishAction(response.data.results));
  } catch (error) {
    console.log({error});
  }
}

export default all([takeLatest('@pokemon/GET_POKEMON_LIST', getPokemonList)]);
