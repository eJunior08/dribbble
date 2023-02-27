import React from 'react';

import * as S from './styles';

type Props = {};

export const Profile: React.FC<Props> = () => {
  return (
    <S.Container>
      <S.Avatar />
      <S.GreetingTitle>Welcome back</S.GreetingTitle>
    </S.Container>
  );
};
