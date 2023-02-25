type GrayColors = Record<'base', string>;

type NeutralColors = Record<'white' | 'dark', string>;

type PrimaryColors = Record<'base', string>;

export type Color = {
  primary: PrimaryColors;
  neutral: NeutralColors;
  gray: GrayColors;
};
