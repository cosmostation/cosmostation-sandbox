import '~/styles/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Routes from './Routes';
import { systemEnTheme } from './styles/theme';

function Popup() {
  const theme = createTheme({
    ...systemEnTheme,
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
);
