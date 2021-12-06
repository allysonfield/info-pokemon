import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, TouchableOpacity} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {Container} from './styled';
import {RootStackParamList} from '~/routes/routes';
import {pokemonListAction} from '~/store/modules/pokemon/action';

type HomeScreenProp = StackNavigationProp<RootStackParamList>;

const Home = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation<HomeScreenProp>();
  const {pokemons} = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(pokemonListAction({limit: 10, offset: 0}));
  }, [dispatch]);
  return (
    <Container>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigate('Details')}>
        <Text>Go to details</Text>
      </TouchableOpacity>
      {pokemons.map((item, index) => (
        <Text key={index.toString()}>{item.name}</Text>
      ))}
    </Container>
  );
};

export default Home;
