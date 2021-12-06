import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

type TitleProps = {
  color: string;
};

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
`;

export const Title = styled.Text<TitleProps>`
  color: ${({color}) => color};
  font-size: 30px;
  font-family: ${({theme}) => theme.fonts.MEDIUM};
`;
