import styled from 'styled-components/native';

import { ComponentProps } from 'react';
import { Dimensions } from 'react-native';

import { CARD_SIZE } from './enums/size';

import { Text } from '../text';
import { TEXT_TYPE } from '../text/enums/text-type';

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

export const Container = styled.View<{
  size: CARD_SIZE;
  rotate: number;
  color: string;
}>`
  padding: 16px;
  padding-bottom: 36px;
  border-radius: 18px;

  width: ${({ size }) => getWidthByCardSize(size)}px;
  transform: rotateZ(${({ rotate }) => rotate + 'deg'});
  background-color: ${({ color }) => color};
`;

export const Title = styled(Text).attrs<{}, ComponentProps<typeof Text>>(
  ({ theme }) => ({
    type: TEXT_TYPE.TITLE_1,
    color: theme.colors.neutral.dark,
  }),
)`
  margin-bottom: 10px;
`;

export const Subtitle = styled(Text).attrs<{}, ComponentProps<typeof Text>>(
  ({ theme }) => ({
    type: TEXT_TYPE.SUBTITLE_2,
    color: theme.colors.gray.base,
  }),
)``;

export const Description = styled(Text).attrs<{}, ComponentProps<typeof Text>>(
  ({ theme }) => ({
    color: theme.colors.gray.light,
    numberOfLines: 4,
  }),
)`
  margin-top: 35px;
`;
