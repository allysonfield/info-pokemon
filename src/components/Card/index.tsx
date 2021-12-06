import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

import {Container, Row, Title} from './styled';

const Card = ({name, url}) => {
  const [data, setData] = useState(null);
  const getInfo = async () => {
    const response = await axios.get(url);
    setData(response.data);
    console.log({info: response.data.sprites.other});
  };
  useEffect(() => {
    if (url) {
      getInfo();
    }
  }, []);
  return (
    <Container>
      <Row>
        <View>
          <Title>{name}</Title>
        </View>

        {data && (
          <Image
            resizeMode="cover"
            source={{uri: data.sprites.front_default}}
            style={{width: 80, height: 80}}
          />
        )}
      </Row>
    </Container>
  );
};

export default Card;
