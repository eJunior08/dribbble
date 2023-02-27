import React from 'react';
import { ViewProps } from 'react-native';

import * as S from './styles';

type Props = ViewProps & {
  avatar: string;
  name: string;
};

export const Profile: React.FC<Props> = ({ /* avatar, */ name, ...props }) => {
  return (
    <S.Container {...props}>
      <S.Avatar />
      <S.GreetingTitle>
        Welcome back <S.NameTitle>{name}</S.NameTitle>
      </S.GreetingTitle>
    </S.Container>
  );
};
