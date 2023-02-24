import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { CARD_SIZE } from './enums/size';

const { width: WIDTH } = Dimensions.get('window');

function getWidthByCardSize(cardSize: CARD_SIZE) {
  let width = 250;

  switch (cardSize) {
    case CARD_SIZE.SMALL:
      width = 200;
      break;

    case CARD_SIZE.REGULAR:
      width = 250;
      break;

    case CARD_SIZE.LARGE:
      width = WIDTH;
      break;

    default:
      width = 100;
  }

  return width;
}

function getBackgroundColorByTheme(theme: string) {
  let color = '#FFF';

  switch (theme) {
    case 'primary':
      color = '#d1fa57';
      break;

    case 'light':
      color = '#fff';
      break;

    default:
      color = '#fff';
  }

  return color;
}

export const Container = styled.View<{
  size: CARD_SIZE;
  rotate: number;
  theme: string;
}>`
  padding: 16px;
  padding-bottom: 36px;
  border-radius: 18px;

  width: ${({ size }) => getWidthByCardSize(size)}px;
  transform: rotateZ(${({ rotate }) => rotate + 'deg'});
  background-color: ${({ theme }) => getBackgroundColorByTheme(theme)};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #1e1e1e;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #838383;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 4,
})`
  margin-top: 35px;
  color: #a6a6a6;
`;
