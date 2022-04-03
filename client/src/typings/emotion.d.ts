import '@emotion/react';

type ColorPalette = {
  main: string;
  light?: string;
};
type ColorRange = {
  100: string;
  200: string;
  300: string;
  400: string;
};

type TextWeightVariants = 'light' | 'normal' | 'bold' | 'extraBold';
type TextFontVariants = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      common: {
        black: string;
        white: string;
        grey: ColorRange;
      };
      primary: ColorPalette;
      background: ColorPalette;
    };
    typography: {
      fontSizes: {
        [key in TextFontVariants]: string;
      };
    };
    borderRadius: {
      subtle: string;
      round: string;
      circle: string;
    };
    boxShadow: {
      basic: string;
    };
    border: {
      basic: string;
    };
  }
}
