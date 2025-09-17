import { Container } from '@/components/Container';
import { SignInForm } from '@/components/SignIn/SignInForm';

export const SignInPage = () => {
  return (
    <Container className='border px-8'>
      <div className='wrapper-signin-page w-full'>
        <div className='signin-page'>
          <div className='signin-page__content grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
            <div className='signin-page__content--left h-4/5 border-r border-zinc-300 flex flex-col justify-center items-start gap-6 p-12'>
              <div className='signin-page__content--left-header'>
                <h1 className='text-xl font-bold'>Já sou cliente</h1>
              </div>

              <SignInForm />
            </div>
            <div className='signin-page__content--right bg-cyan-400 flex flex-col justify-center items-start gap-6 p-8'>
              ...
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
