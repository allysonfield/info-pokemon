import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useTheme} from 'styled-components';
import {navigationProp, PokemonProps} from '~/@types/interfaces';
import Header from '~/components/Header';

import {
  AbilityText,
  Container,
  Content,
  FormText,
  HeightText,
  Item,
  MainImage,
  Right,
  Row,
  RowFooter,
  Top,
  WeightText,
} from './styled';

const Details = () => {
  const route = useRoute();

  const {data} = route.params as PokemonProps;
  const {goBack} = useNavigation<navigationProp>();

  const {colors} = useTheme();

  return (
    <Container>
      <Top>
        <Header
          goBack={goBack}
          iconColor={colors.WHITE}
          title={data.species.name}
        />
      </Top>

      <Content>
        <MainImage
          resizeMode="contain"
          source={{uri: data.sprites.other.home.front_default}}
        />
        <Row>
          <Right>
            <AbilityText>HABILIDADES</AbilityText>
            <FlatList
              data={data.abilities}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => <Item>{item.ability.name}</Item>}
            />
          </Right>
          <View>
            <FormText>FORMAS</FormText>
            <FlatList
              data={data.forms}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => <Item>{item.name}</Item>}
            />
          </View>
        </Row>

        <RowFooter>
          <Right>
            <HeightText>ALTURA</HeightText>
            <Item>{data.height}</Item>
          </Right>
          <View>
            <WeightText>PESO</WeightText>
            <Item>{data.weight} kg</Item>
          </View>
        </RowFooter>
      </Content>
    </Container>
  );
};

export default Details;
