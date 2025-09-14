import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoadingLogo } from '../components/LoadingLogo';
import { DefaultLayout } from '../components/Layout/DefaultLayout';
import ProductPage from '../pages/ProductPage';

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingLogo />}>
      <Routes>
        {/* Rota Home com layout default */}
        <Route
          path='/'
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />

        {/* Rota dinâmica de Produto */}
        <Route
          path='/:produto'
          element={
            <DefaultLayout>
              <ProductPage />
            </DefaultLayout>
          }
        />

        {/* Rota NotFoundPage */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
