import type { Colors, ThemeStyle } from '~/types/theme';

const systemThemeColors: Colors = {
  base01: '#FFFFFF',
  base02: '#8A99AE',
  base03: '#505267',
  base04: '#3D3D4F',
  base05: '#313148',
  base06: '#252537',
  base07: '#1B1B30',
  base08: '#1F1F2C',
};

const htmlFontSize = 10;

const h1En = { fontFamily: 'Inter700', fontStyle: 'normal', fontSize: '2.4rem', lineHeight: '3.4rem', letterSpacing: 'normal' };
const h2En = { fontFamily: 'Inter600', fontStyle: 'normal', fontSize: '2.4rem', lineHeight: '2.9rem', letterSpacing: 'normal' };
const h3En = { fontFamily: 'Inter700', fontStyle: 'normal', fontSize: '1.8rem', lineHeight: '2.2rem', letterSpacing: 'normal' };
const h4En = { fontFamily: 'Inter600', fontStyle: 'normal', fontSize: '1.8rem', lineHeight: '2.2rem', letterSpacing: 'normal' };
const h5En = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '1.6rem', lineHeight: '1.6rem', letterSpacing: 'normal' };
const h6En = { fontFamily: 'Inter600', fontStyle: 'normal', fontSize: '1.6rem', lineHeight: '1.5rem', letterSpacing: 'normal' };
const h7En = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '1.6rem', lineHeight: '1.2rem', letterSpacing: 'normal' };
const h8En = { fontFamily: 'Inter600', fontStyle: 'normal', fontSize: '1.4rem', lineHeight: '1.2rem', letterSpacing: 'normal' };
const h9En = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '1.4rem', lineHeight: '1.2rem', letterSpacing: 'normal' };

const hEn = { h1: h1En, h2: h2En, h3: h3En, h4: h4En, h5: h5En, h6: h6En, h7: h7En, h8: h8En, h9: h9En };

const h1n = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '2.8rem', lineHeight: '4.1rem', letterSpacing: 'normal' };
const h2n = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '2.4rem', lineHeight: '3.5rem', letterSpacing: 'normal' };
const h3n = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '1.8rem', lineHeight: '2.6rem', letterSpacing: 'normal' };
const h4n = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '1.5rem', lineHeight: '2.2rem', letterSpacing: 'normal' };
const h5n = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '1.3rem', lineHeight: '1.9rem', letterSpacing: 'normal' };
const h6n = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '1.2rem', lineHeight: '1.8rem', letterSpacing: 'normal' };
const h7n = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '1.1rem', lineHeight: '1.6rem', letterSpacing: 'normal' };
const h8n = { fontFamily: 'Inter500', fontStyle: 'normal', fontSize: '1rem', lineHeight: '1.5rem', letterSpacing: 'normal' };

const hn = { h1n, h2n, h3n, h4n, h5n, h6n, h7n, h8n };

export const systemEnTheme: ThemeStyle = {
  mode: 'system',
  colors: systemThemeColors,
  typography: {
    htmlFontSize,
    ...hEn,
    ...hn,
  },
};
