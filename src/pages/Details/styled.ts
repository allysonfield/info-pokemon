import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 0px;
  background: ${({theme}) => theme.colors.GREEN};
`;

export const Top = styled.View`
  padding: 0 20px;
`;

export const MainImage = styled.Image`
  height: 200px;
  width: 200px;
  position: absolute;
  top: -160px;
  z-index: 10;
`;

export const AbilityText = styled.Text`
  font-size: 22px;
  font-family: ${({theme}) => theme.fonts.EXTRA_BOLD};
  color: ${({theme}) => theme.colors.RED};
`;

export const FormText = styled.Text`
  font-size: 22px;
  font-family: ${({theme}) => theme.fonts.EXTRA_BOLD};
  color: ${({theme}) => theme.colors.YELLOW};
`;

export const HeightText = styled.Text`
  font-size: 22px;
  font-family: ${({theme}) => theme.fonts.EXTRA_BOLD};
  color: ${({theme}) => theme.colors.BLUE};
`;

export const Item = styled.Text`
  font-size: 15px;
  font-family: ${({theme}) => theme.fonts.EXTRA_BOLD};
  color: ${({theme}) => theme.colors.GRAY};
`;

export const WeightText = styled.Text`
  font-size: 22px;
  font-family: ${({theme}) => theme.fonts.EXTRA_BOLD};
  color: ${({theme}) => theme.colors.PURPLE};
`;

export const Row = styled.View`
  border-top-left-radius: 44px;
  border-top-right-radius: 44px;
  border-bottom-width: 0;
  padding: 30px 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
  border-width: 3px;
  border-color: ${({theme}) => theme.colors.RED};
`;

export const RowFooter = styled.View`
  border-bottom-width: 0;
  padding: 30px 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
  border-left-width: 3px;
  border-right-width: 3px;
  border-color: ${({theme}) => theme.colors.GREEN};
`;

export const Content = styled.View`
  border-top-left-radius: 44px;
  border-top-right-radius: 44px;
  border-width: 3px;
  border-bottom-width: 0;
  border-color: ${({theme}) => theme.colors.YELLOW};
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 60%;
  padding: 20px 20px 0;
`;

export const Right = styled.View`
  justify-content: center;
  align-items: baseline;
`;
