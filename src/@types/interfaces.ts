import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '~/routes/routes';

export interface DataPokeList {
  name: string;
  url: string;
}
[];

export type navigationProp = StackNavigationProp<RootStackParamList>;

type specie = {name: string};

type sprite = {other: {home: {front_default: string}}};

type ability = {ability: {name: string}}[];

type form = {name: string};

type data = {
  species: specie;
  sprites: sprite;
  abilities: ability;
  forms: form[];
  height: number;
  weight: number;
};
export interface PokemonProps {
  data: data;
  name: string;
  url: string;
}
type Pokemon = {
  pokemons: PokemonProps[];
  loading: boolean;
};
export interface PokemonReducerProps {
  pokemon: Pokemon;
}
