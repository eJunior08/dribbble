import React from 'react';

import * as S from './styles';

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <S.Container>
      <S.Profile avatar="" name="Elson" />
      <S.Title>Your Notes</S.Title>
    </S.Container>
  );
};
