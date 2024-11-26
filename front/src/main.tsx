import '@/styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BackgroundImg from './components/backgroudImg';
import { RidesProvider } from './context/ridesContext';
import App from './layout/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BackgroundImg>
      <RidesProvider>
        <App />
      </RidesProvider>
    </BackgroundImg>
  </StrictMode>,
);
