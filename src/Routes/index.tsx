import { BrowserRouter, Route, Routes as BaseRoutes } from 'react-router-dom';
import Home from 'src/pages/Home';
import NotFound from 'src/pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <BaseRoutes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </BaseRoutes>
    </BrowserRouter>
  );
}
