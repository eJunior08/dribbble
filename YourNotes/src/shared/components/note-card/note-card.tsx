import React from 'react';

import { CARD_SIZE } from './enums/size';

import * as S from './styles';

type Options = {
  size?: CARD_SIZE;
  showAll?: boolean;
  rotate?: number;
  theme?: 'primary' | 'light';
};

type Props = {
  title: string;
  creationDate: Date;
  description: string;
  options: Options;
};

export const NoteCard: React.FC<Props> = ({
  title,
  creationDate,
  description,
  options,
  ...props
}) => {
  const formattedDate = getFormattedDate(creationDate);

  function getFormattedDate(date: Date) {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  return (
    <S.Container
      size={options.size ?? CARD_SIZE.REGULAR}
      rotate={options.rotate ?? 0}
      theme={options.theme}
      {...props}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{formattedDate}</S.Subtitle>

      <S.Description>{description}</S.Description>
    </S.Container>
  );
};