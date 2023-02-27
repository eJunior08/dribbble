import React from 'react';

import * as S from './styles';

type Props = {};

export const Home: React.FC<Props> = () => {
  return (
    <S.SafeView>
      <S.Container>
        <S.Header />
      </S.Container>
    </S.SafeView>
  );
};
