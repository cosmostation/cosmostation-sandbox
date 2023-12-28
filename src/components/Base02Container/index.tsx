import { Container } from './styled';

type Base02ContainerProps = {
  children: JSX.Element;
};

export default function Base02Container({ children }: Base02ContainerProps) {
  return <Container>{children}</Container>;
}
