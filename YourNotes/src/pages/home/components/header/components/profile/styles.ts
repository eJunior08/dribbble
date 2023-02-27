import { ComponentProps } from 'react';
import styled from 'styled-components/native';
import { Text } from '../../../../../../shared/components/text';
import { TEXT_TYPE } from '../../../../../../shared/components/text/enums/text-type';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  background-color: white;
`;

type TText = ComponentProps<typeof Text>;

export const GreetingTitle = styled(Text).attrs<{}, TText>(({ theme }) => {
  return {
    type: TEXT_TYPE.BODY_1,
    color: theme.colors.gray.light,
  };
})`
  margin-left: 12px;
`;

export const NameTitle = styled(Text).attrs<{}, TText>(({ theme }) => ({
  type: TEXT_TYPE.BODY_1,
  color: theme.colors.neutral.white,
}))``;
