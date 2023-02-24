import React from 'react';

import { CARD_SIZE } from '../../shared/components/note-card/enums/size';

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
          options={{ size: CARD_SIZE.REGULAR, rotate: -10 }}
        />

        <S.PrimaryCard
          title="Not sure where this is going"
          creationDate={new Date()}
          description="Don't read the caption, it's all same, you dumb dumb, did you even read this though"
          options={{ size: CARD_SIZE.REGULAR, rotate: -10, theme: 'primary' }}
        />
      </S.CardsContainer>
    </S.Container>
  );
};
