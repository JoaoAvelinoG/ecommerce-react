import { Footer } from '../Footer';
import { Header } from '../Header';
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
