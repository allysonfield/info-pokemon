import React from 'react';
import {FlatList} from 'react-native';
import Card from '../Card';

import {Container, List} from './styled';

const PokeList = ({data}) => {
  return (
    <Container>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <Card name={item.name} url={item.url} />}
      />
    </Container>
  );
};

export default PokeList;
