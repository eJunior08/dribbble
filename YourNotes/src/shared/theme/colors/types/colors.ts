type GrayColors = Record<'dark' | 'base' | 'light', string>;

type NeutralColors = Record<'white' | 'dark', string>;

type PrimaryColors = Record<'base', string>;

export type Color = {
  primary: PrimaryColors;
  neutral: NeutralColors;
  gray: GrayColors;
};
