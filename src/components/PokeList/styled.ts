import {FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {DataPokeList} from '~/@types/interfaces';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const List = styled(FlatList as new () => FlatList<DataPokeList>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingBottom: getBottomSpace()},
})``;
