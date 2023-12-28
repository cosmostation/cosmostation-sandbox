const dSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '500px',
  tablet: '768px',
  laptop: '1200px',
  laptopL: '1440px',
  macLaptop: '1550px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${dSize.mobileS})`,
  mobileM: `(max-width: ${dSize.mobileM})`,
  mobileL: `(max-width: ${dSize.mobileL})`,
  tablet: `(max-width: ${dSize.tablet})`,
  laptop: `(max-width: ${dSize.laptop})`,
  minLaptop: `(min-width: ${dSize.laptop})`,
  laptopL: `(max-width: ${dSize.laptopL})`,
  macLaptop: `(max-width: ${dSize.macLaptop})`,
  desktop: `(max-width: ${dSize.desktop})`,
  desktopL: `(max-width: ${dSize.desktop})`,
};

export const heightDevice = {
  laptop: `(max-height: ${dSize.tablet})`,
};
