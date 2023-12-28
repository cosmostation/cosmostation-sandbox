import { styled } from '@mui/material/styles';

export const Background = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',

  backgroundColor: theme.colors.base02,
}));
