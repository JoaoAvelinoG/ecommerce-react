import { Container } from '@/components/Container';
import { CreateAccountForm } from '@/components/CreateAccount/CreateAccountForm';
import { SignInForm } from '@/components/SignIn/SignInForm';

import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const SignInPage = () => {
  const navigate = useNavigate();

  function handleLogout() {
    googleLogout();
    console.log('Logout efetuado com sucesso');
  }

  return (
    <Container className='px-8'>
      <div className='wrapper-signin-page w-full'>
        <div className='signin-page'>
          <div className='signin-page__content grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
            <div className='signin-page__content--left h-4/5 border-r border-zinc-300 flex flex-col justify-center items-start gap-6 p-12'>
              <SignInForm />
            </div>
            <div className='signin-page__content--right flex flex-col justify-center items-start gap-6 p-8'>
              <CreateAccountForm />
            </div>
          </div>
        </div>
        <p className='text-sm text-center'>
          Acesse sua conta Netshoes através de suas redes sociais.
        </p>
        <div className='w-[90%] md:w-3/12 mx-auto mt-6'>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              console.log(jwtDecode(credentialResponse.credential!));
              navigate('/home');
            }}
            onError={() => {
              console.log('Erro no login com Google');
            }}
          />
        </div>
      </div>
    </Container>
  );
};
