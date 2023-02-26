import React from 'react';
import { TextProps } from 'react-native';

import { TEXT_TYPE } from './enums/text-type';

import * as S from './styles';

type Props = TextProps &
  React.PropsWithChildren<{
    type?: TEXT_TYPE;
    color?: string;
  }>;

export const Text: React.FC<Props> = ({ type, color, children, ...props }) => {
  return (
    <S.Text type={type ?? TEXT_TYPE.BODY_1} color={color} {...props}>
      {children}
    </S.Text>
  );
};
