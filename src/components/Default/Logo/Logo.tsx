import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <section className='logo'>
      <div className='logo__image flex items-center justify-center h-[80px] w-[90px]'>
        <Link to={'/'}>
          <img
            className='w-full h-auto object-cover'
            src='/svg/netshoes-logo-branco.svg'
            alt='Logo'
          />
        </Link>
      </div>
    </section>
  );
};
