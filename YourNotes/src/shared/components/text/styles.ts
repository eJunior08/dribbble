import styled from 'styled-components/native';

import { TEXT_TYPE } from './enums/text-type';

type FontStyle = {
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
};

type StyleOptions = {
  [key in TEXT_TYPE]: FontStyle;
} & { default: FontStyle };

function getFontStyleByType(type: TEXT_TYPE): FontStyle {
  const styleOptions: StyleOptions = {
    [TEXT_TYPE.BODY_1]: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'San Francisco',
    },
    [TEXT_TYPE.BODY_2]: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: 'San Francisco',
    },
    [TEXT_TYPE.CAPTION_1]: {
      fontSize: 10,
      fontWeight: 400,
      fontFamily: 'San Francisco',
    },
    [TEXT_TYPE.HEADING_1]: {
      fontSize: 52,
      fontWeight: 700,
      fontFamily: 'San Francisco',
    },
    [TEXT_TYPE.SUBTITLE_1]: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: 'San Francisco',
    },
    [TEXT_TYPE.SUBTITLE_2]: {
      fontSize: 18,
      fontWeight: 400,
      fontFamily: 'San Francisco',
    },
    [TEXT_TYPE.TITLE_1]: {
      fontSize: 24,
      fontWeight: 400,
      fontFamily: 'San Francisco',
    },
    [TEXT_TYPE.TITLE_2]: {
      fontSize: 20,
      fontWeight: 400,
      fontFamily: 'San Francisco',
    },
    default: { fontSize: 16, fontWeight: 400, fontFamily: 'San Francisco' },
  };

  return styleOptions[type] || styleOptions.default;
}

export const Text = styled.Text<{ type: TEXT_TYPE }>`
  ${({ type, theme }) => {
    const fontStyle = getFontStyleByType(type);

    return {
      color: theme.colors.neutral.white,
      fontSize: fontStyle.fontSize,
      fontWeight: fontStyle.fontWeight,
    };
  }}
`;
