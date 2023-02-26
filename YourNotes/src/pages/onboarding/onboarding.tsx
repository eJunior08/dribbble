import React from 'react';

import * as S from './styles';

type Props = {};

export const OnBoarding: React.FC<Props> = () => {
  return (
    <S.Container>
      <S.Title>You suck at taking notes brother, you need us :)</S.Title>

      <S.CardsContainer>
        <S.LightCard
          title="Not sure where this is going"
          creationDate={new Date()}
          description="Don't read the caption, it's all same, you dumb dumb, did you even read this though"
        />

        <S.PrimaryCard
          title="Not sure where this is going"
          creationDate={new Date()}
          description="Don't read the caption, it's all same, you dumb dumb, did you even read this though"
        />
      </S.CardsContainer>
    </S.Container>
  );
};
