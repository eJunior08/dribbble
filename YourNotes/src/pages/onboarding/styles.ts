import styled from 'styled-components/native';

import { ComponentProps } from 'react';

import { Text } from '../../shared/components/text';
import { NoteCard } from '../../shared/components/note-card';
import { TEXT_TYPE } from '../../shared/components/text/enums/text-type';

export const Container = styled.SafeAreaView`
  background-color: #1e1e1e;
  flex: 1;
`;

export const Title = styled(Text).attrs<{}, ComponentProps<typeof Text>>({
  type: TEXT_TYPE.HEADING_1,
})`
  margin-left: 28px;
  margin-top: 40px;
`;

export const CardsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const LightCard = styled(NoteCard)`
  position: absolute;
`;

export const PrimaryCard = styled(NoteCard).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 11,
  },
  shadowOpacity: 0.57,
  shadowRadius: 15.19,

  elevation: 23,
})`
  position: absolute;
  left: 180px;
  top: 220px;
`;
