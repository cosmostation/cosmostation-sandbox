import SampleComponent from './components/SampleComponent';
import { Background } from './styled';

export default function Home() {
  return (
    <Background>
      <SampleComponent title="Hello Cosmostation" />
    </Background>
  );
}
