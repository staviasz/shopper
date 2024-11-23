import '@/styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BackgroundImg from './components/backgroudImg';
import App from './layout/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BackgroundImg>
      <App />
    </BackgroundImg>
  </StrictMode>,
);
