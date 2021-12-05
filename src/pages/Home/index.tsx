import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, TouchableOpacity} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {Container} from './styled';
import {RootStackParamList} from '~/routes/routes';

type HomeScreenProp = StackNavigationProp<RootStackParamList>;

const Home = () => {
  const {navigate} = useNavigation<HomeScreenProp>();
  return (
    <Container>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigate('Details')}>
        <Text>Go to details</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
