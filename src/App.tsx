import { useEffect, type JSX } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
// import { useDevice } from './hooks/useDevice';

import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-P5B8MZQJ1P';

function App(): JSX.Element {
  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID);
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'App.tsx',
    });
  }, []);
  // const { isMobile, isIos, screenWidth } = useDevice();

  return (
    <>
      {/* <h1>Device Detector</h1>
      <p>Largura da tela: {screenWidth}px</p>
      {screenWidth < 768 && <p>Exibido apenas em telas menores que 768px</p>}
      <p>É mobile? {isMobile ? '✅ Sim' : '❌ Não'}</p>
      <p>É iOS? {isIos ? '🍎 Sim' : 'Não'}</p> */}

      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
