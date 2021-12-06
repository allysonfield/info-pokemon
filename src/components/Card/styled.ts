import styled from 'styled-components/native';

export const Container = styled.View`
  height: 130px;
  border-radius: 15px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.GREEN};
  width: 170px;
  margin: 2px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.BOLD};
  color: ${({theme}) => theme.colors.BLACK};
`;
