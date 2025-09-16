import { Footer } from '../Default/MainFooter/Footer';
import { Header } from '../Default/MainHeader/Header';
import { Navbar } from '../Home/Navbar';
import { Topbar } from '../Home/Topbar';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Topbar />
      <Header />
      {/* Início da Navbar */}
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
