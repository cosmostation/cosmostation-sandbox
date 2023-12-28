import { device } from 'src/constants/muiSize';
import { Typography, useMediaQuery } from '@mui/material';

import { Container, TitleContainer } from './styled';

type SampleComponentProps = {
  title: string;
};

export default function SampleComponent({ title }: SampleComponentProps) {
  const isLaptop = useMediaQuery(device.minLaptop);

  return (
    <Container>
      <TitleContainer data-is-laptop={isLaptop}>
        <Typography variant="h3">{title}</Typography>
      </TitleContainer>
    </Container>
  );
}
