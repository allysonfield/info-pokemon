import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Title} from './styled';

interface Props {
  title: string;
  iconColor: string;
  goBack?: () => void;
}

const Header = ({title, iconColor, goBack}: Props) => {
  return (
    <Container>
      {goBack && (
        <Icon onPress={goBack} name="arrow-left" color={iconColor} size={20} />
      )}
      <Title color={iconColor}>{title}</Title>
    </Container>
  );
};

export default Header;
