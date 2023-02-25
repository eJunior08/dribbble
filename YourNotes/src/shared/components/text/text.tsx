import React from 'react';
import { TextProps } from 'react-native';

import { TEXT_TYPE } from './enums/text-type';

import * as S from './styles';

type Props = React.PropsWithChildren<{
  type?: TEXT_TYPE;
  props?: TextProps;
}>;

export const Text: React.FC<Props> = ({ type, children, ...props }) => {
  return (
    <S.Text type={type ?? TEXT_TYPE.BODY_1} {...props}>
      {children}
    </S.Text>
  );
};
