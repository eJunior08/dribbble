import { ComponentProps } from 'react';
import styled from 'styled-components/native';
import { Text } from '../../../../shared/components/text';
import { TEXT_TYPE } from '../../../../shared/components/text/enums/text-type';
import { Profile as CProfile } from './components/profile';

export const Container = styled.View``;

type TText = ComponentProps<typeof Text>;

export const Title = styled(Text).attrs<{}, TText>(({ theme }) => {
  return {
    type: TEXT_TYPE.HEADING_1,
    color: theme.colors.neutral.white,
  };
})``;

export const Profile = styled(CProfile)`
  margin-bottom: 22px;
`;
