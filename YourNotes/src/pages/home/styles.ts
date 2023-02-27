import styled from 'styled-components/native';

import { Header as CHeader } from './components/header';

export const SafeView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.neutral.dark};
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 28px;
`;

export const Header = styled(CHeader)``;
