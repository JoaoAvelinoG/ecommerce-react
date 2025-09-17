import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const SignInForm = () => {
  return (
    <>
      <div className='signin-page__content--left-form flex flex-col items-start gap-4 w-full'>
        <div className='signin-page__content--left-header'>
          <h1 className='text-xl font-bold'>Já sou cliente</h1>
        </div>
        <Input type='text' placeholder='E-mail, CPF ou CNPJ' />
        <Input type='password' placeholder='Senha' />
        <span>Esqueci minha senha</span>
        <div className='signin-page__content--left-form-buttons flex flex-col items-center w-full gap-4'>
          <Button className='w-full'>Acessar conta</Button>
          <Button variant='outline' className='w-full'>
            Entrar sem senha
          </Button>
        </div>
      </div>
    </>
  );
};
