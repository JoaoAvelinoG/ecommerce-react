import type { ReactNode } from 'react';
import { Header } from '../Default/MainHeader/Header';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <Header variant='minimal' />
      {children}
    </div>
  );
};
