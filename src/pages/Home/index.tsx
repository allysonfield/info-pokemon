import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, TouchableOpacity} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from 'styled-components';
import {Container} from './styled';
import {RootStackParamList} from '~/routes/routes';
import {pokemonListAction} from '~/store/modules/pokemon/action';
import Header from '~/components/Header';
import PokeList from '~/components/PokeList';

type HomeScreenProp = StackNavigationProp<RootStackParamList>;

const Home = () => {
  const {navigate} = useNavigation<HomeScreenProp>();
  const {colors} = useTheme();

  return (
    <Container>
      <Header iconColor={colors.BLACK} title="Pokedex" />

      <PokeList />
    </Container>
  );
};

export default Home;
