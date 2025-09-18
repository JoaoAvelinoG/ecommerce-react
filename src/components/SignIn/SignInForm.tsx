import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginUser } from '@/api/login';

// Schema de validação com Zod
const signInFormSchema = z.object({
  email: z.email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Função chamada no submit
  const onSubmit = async (data: SignInFormData) => {
    console.log('Dados do login:', data);
    const user = await loginUser(data.email, data.password);
    console.log('Usuário Logado: ', user);
    reset();
    // Aqui você pode chamar sua API de autenticação
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='signin-page__content--left-form flex flex-col items-start gap-4 w-full'
    >
      <div className='signin-page__content--left-header'>
        <h1 className='text-xl font-bold'>Já sou cliente</h1>
      </div>

      {/* Campo de E-mail */}
      <div className='w-full'>
        <Input
          id='email'
          type='text'
          placeholder='E-mail, CPF ou CNPJ'
          {...register('email')}
        />
        {errors.email && (
          <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
        )}
      </div>

      {/* Campo de Senha */}
      <div className='w-full'>
        <Input
          id='password'
          type='password'
          placeholder='Senha'
          {...register('password')}
        />
        {errors.password && (
          <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>
        )}
      </div>

      <span className='cursor-pointer text-blue-500 hover:underline'>
        Esqueci minha senha
      </span>

      <div className='signin-page__content--left-form-buttons flex flex-col items-center w-full gap-4'>
        <Button type='submit' className='w-full' disabled={isSubmitting}>
          {isSubmitting ? 'Entrando...' : 'Acessar conta'}
        </Button>
        <Button variant='outline' className='w-full' type='button'>
          Entrar sem senha
        </Button>
      </div>
    </form>
  );
};
