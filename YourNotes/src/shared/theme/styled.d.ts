import 'styled-components/native';

import { Color } from './colors/types/colors';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: Color;
  }
}
