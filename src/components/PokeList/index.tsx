import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from 'styled-components';
import {PokemonReducerProps} from '~/@types/interfaces';
import {
  pokemonListAction,
  pokemonListLoadMoreAction,
} from '~/store/modules/pokemon/action';
import Card from '../Card';

import {Container} from './styled';

const PokeList = () => {
  const dispatch = useDispatch();
  const {pokemons, loading} = useSelector(
    (state: PokemonReducerProps) => state.pokemon,
  );
  const [offset, setOffset] = useState(0);
  const {colors} = useTheme();

  async function loadMore() {
    if (!loading) {
      const page = offset + 1;
      dispatch(pokemonListLoadMoreAction({limit: 10, offset: page}));
      setOffset(page);
    }
  }

  useEffect(() => {
    dispatch(pokemonListAction({limit: 10, offset: 0}));
  }, [dispatch]);
  return (
    <Container>
      <FlatList
        data={pokemons}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <Card name={item.name} url={item.url} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.05}
        ListFooterComponent={
          loading && <ActivityIndicator color={colors.GREEN} size="large" />
        }
      />
    </Container>
  );
};

export default PokeList;
