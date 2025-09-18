import { Container } from '@/components/Container';
import { CreateAccountForm } from '@/components/CreateAccount/CreateAccountForm';
import { SignInForm } from '@/components/SignIn/SignInForm';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/useAuthStore';
import { useGeneralStore } from '@/stores/useGeneralStore';

import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode, type JwtPayload } from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type JwtPayloadExtended = JwtPayload & {
  name: string;
  email: string;
  picture: string;
};

export const SignInPage = () => {
  const navigate = useNavigate();
  const { isSignedIn, userData, setToken, setUserData } = useAuthStore();
  const { currentPageData, setCurrentPageData } = useGeneralStore();

  // Executa efeitos colaterais.
  useEffect(() => {
    setCurrentPageData({
      title: 'Login',
      description: 'Página de Login da Netshoes',
    });
  }, [setCurrentPageData]);

  useEffect(() => {
    document.title = currentPageData?.title || 'Netshoes | Loja de Esportes';
  }, [currentPageData]);

  function handleLogout() {
    googleLogout(); // limpa sessão do Google
    setToken(null); // limpa token da store e cookies (também limpa userData automaticamente)
    console.log('Logout efetuado com sucesso');
  }

  return (
    <Container className='px-8'>
      {isSignedIn && userData ? (
        // Se estiver logado, mostrar logout
        <div className='flex flex-col items-center justify-center h-96'>
          <img
            src={userData.picture}
            alt={`Foto de perfil de ${userData.name}`}
            className='w-20 h-20 rounded-full mb-4 object-cover'
          />
          <p>
            Seja bem-vindo! <strong>{userData.name}</strong>
          </p>
          <p className='mb-4 text-lg'>Você está logado!</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        // Se não estiver logado, mostrar formulários + Google Login
        <div className='wrapper-signin-page w-full'>
          <div className='signin-page'>
            <div className='signin-page__content grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
              <div className='signin-page__content--left h-4/5 border-r border-zinc-300 flex flex-col justify-center items-start gap-6 p-12'>
                <SignInForm />
              </div>
              <div className='signin-page__content--right flex flex-col justify-center items-start gap-6 px-8'>
                <CreateAccountForm />
              </div>
            </div>
          </div>
          <p className='text-sm text-center'>
            Acesse sua conta Netshoes através de suas redes sociais.
          </p>
          <div className='flex justify-center items-center w-full md:w-3/12 mx-auto mt-6'>
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
                const decoded = jwtDecode<JwtPayloadExtended>(
                  credentialResponse.credential!,
                );
                console.log('Dados do usuário:', decoded);

                // Salva os dados do usuário na store
                setUserData({
                  name: decoded.name,
                  email: decoded.email,
                  picture: decoded.picture,
                });

                setToken(credentialResponse.credential!); // salva token na store
                navigate('/home'); // redireciona após login
              }}
              onError={() => {
                console.log('Erro no login com Google');
              }}
            />
          </div>
        </div>
      )}
    </Container>
  );
};
