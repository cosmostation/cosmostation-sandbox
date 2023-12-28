import { styled } from '@mui/material/styles';

import Base02Container from '~/components/Base02Container';
import { device } from '~/constants/muiSize';

export const Container = styled(Base02Container)(({ theme }) => ({
  color: theme.colors.base01,

  marginTop: '1.6rem',
}));

type TitleContainerProps = {
  'data-is-laptop': boolean;
};

export const TitleContainer = styled('div')<TitleContainerProps>(({ theme, ...props }) => ({
  color: props['data-is-laptop'] ? theme.colors.base01 : theme.colors.base02,

  [`@media ${device.laptop}`]: {
    padding: '0',
  },
}));
