import { Footer } from '../Default/MainFooter/Footer';
import { Header } from '../Default/MainHeader/Header';
import { Topbar } from '../Home/Topbar';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Topbar />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
