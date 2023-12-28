export type ThemeStyle = {
  mode: 'system';
  colors: Colors;
  typography: TextTypos &
    NumberTypos & {
      htmlFontSize: number;
    };
};

export type TextTypos = {
  h1: Record<string, unknown>;
  h2: Record<string, unknown>;
  h3: Record<string, unknown>;
  h4: Record<string, unknown>;
  h5: Record<string, unknown>;
  h6: Record<string, unknown>;
  h7: Record<string, unknown>;
  h8: Record<string, unknown>;
  h9: Record<string, unknown>;
};

export type NumberTypos = {
  h1n: Record<string, unknown>;
  h2n: Record<string, unknown>;
  h3n: Record<string, unknown>;
  h4n: Record<string, unknown>;
  h5n: Record<string, unknown>;
  h6n: Record<string, unknown>;
  h7n: Record<string, unknown>;
  h8n: Record<string, unknown>;
};

export type Colors = {
  base01: string;
  base02: string;
  base03: string;
  base04: string;
  base05: string;
  base06: string;
  base07: string;
  base08: string;
};
