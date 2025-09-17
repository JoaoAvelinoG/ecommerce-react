import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ErrorBox } from './ErrorBox';

export const CreateAccountForm = () => {
  return (
    <div className='signin-page__content--right-form flex flex-col items-start gap-4 w-full'>
      <div className='signin-page__content--left-header'>
        <h1 className='text-xl font-bold'>Criar conta</h1>
      </div>
      <Input type='email' placeholder='Informe seu Email' />
      {/* Área do Erro */}
      <ErrorBox errorMsg='Você já é cliente, acesse sua conta.' />
      <div className='signin-page__content--left-form-buttons flex flex-col items-center w-full gap-2'>
        <Button className='w-full'>Prosseguir</Button>
      </div>
    </div>
  );
};
