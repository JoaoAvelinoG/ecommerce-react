import type { JSX } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { useDevice } from './hooks/useDevice';

function App(): JSX.Element {
  const { isMobile, isIos, screenWidth } = useDevice();

  return (
    <>
      <h1>Device Detector</h1>
      <p>Largura da tela: {screenWidth}px</p>
      {screenWidth < 768 && <p>Exibido apenas em telas menores que 768px</p>}
      <p>É mobile? {isMobile ? '✅ Sim' : '❌ Não'}</p>
      <p>É iOS? {isIos ? '🍎 Sim' : 'Não'}</p>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
