import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {Container} from './styled';

const Home = ({navigation}) => {
  return (
    <Container>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Go to details</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
