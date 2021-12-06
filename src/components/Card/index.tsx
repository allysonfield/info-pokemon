import {useNavigation} from '@react-navigation/core';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {navigationProp} from '~/@types/interfaces';

import {Container, Row, Title} from './styled';

const Card = ({name, url}) => {
  const [data, setData] = useState(null);
  const {navigate} = useNavigation<navigationProp>();
  const getInfo = async () => {
    const response = await axios.get(url);
    setData(response.data);
    console.log({info: response.data});
  };

  function goDetails() {
    if (data) {
      navigate('Details', {data});
    }
  }
  useEffect(() => {
    if (url) {
      getInfo();
    }
  }, []);
  return (
    <Container onPress={goDetails}>
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
