import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithAnyEmail } from '@/api/auth';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ErrorBox } from './ErrorBox';

// -------------------
// Schemas de validação
// -------------------
const emailSchema = z.object({
  email: z.email('Digite um email válido'),
});

const registerSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  surname: z.string().min(2, 'Sobrenome é obrigatório'),
  cpf: z.string().min(11, 'CPF inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  // pode adicionar mais campos (endereço, cidade, etc.)
});

type EmailFormData = z.infer<typeof emailSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

// -------------------
// Componente principal
// -------------------
export const CreateAccountForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  // Form da etapa 1
  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: emailErrors, isSubmitting: checkingEmail },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  });

  // Form da etapa 2
  const {
    register: registerUser,
    handleSubmit: handleSubmitUser,
    formState: { errors: userErrors, isSubmitting: submittingUser },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  // Etapa 1 → verificar email
  const onSubmitEmail = async (data: EmailFormData) => {
    try {
      const result = await createUserWithAnyEmail(
        data.email,
        '123456789',
        'TesteBr2025',
      );
      if (!result.success) {
        setErrorMessage(result.message); // "Usuário já existe"
      } else {
        setErrorMessage('');
        setEmail(data.email);
        setStep(2); // avança para próxima etapa
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message || 'Erro inesperado');
      }
    }
  };

  // Etapa 2 → enviar cadastro completo
  const onSubmitUser = async (data: RegisterFormData) => {
    try {
      console.log('Cadastro final:', { ...data, email });
      // Aqui você chamaria sua API POST /users com todos os dados
    } catch (err) {
      console.error('Erro ao cadastrar:', err);
    }
  };

  return (
    <div className='mx-auto w-full'>
      {step === 1 && (
        <form
          onSubmit={handleSubmitEmail(onSubmitEmail)}
          className='flex flex-col gap-4 w-full'
        >
          <h2 className='text-lg font-bold mb-2'>Criar conta</h2>

          <Input
            type='email'
            placeholder='Informe seu email'
            {...registerEmail('email')}
            className='w-full border p-2 rounded'
          />
          {emailErrors.email && (
            <p className='text-red-500 text-sm'>{emailErrors.email.message}</p>
          )}

          {errorMessage && (
            <ErrorBox
              errorMsg={
                userErrors.name?.message ??
                'Usuário já existe, entre com sua senha.'
              }
            />
          )}

          <Button type='submit' disabled={checkingEmail}>
            {checkingEmail ? 'Verificando...' : 'Prosseguir'}
          </Button>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={handleSubmitUser(onSubmitUser)}
          className='flex flex-col gap-4'
        >
          <h2 className='text-lg font-bold mb-2'>Cadastro - Pessoa Física</h2>

          <Input type='text' placeholder='Nome' {...registerUser('name')} />
          {userErrors.name && <ErrorBox errorMsg={userErrors.name.message} />}

          <Input
            type='text'
            placeholder='Sobrenome'
            {...registerUser('surname')}
          />
          {userErrors.surname && (
            <p className='text-red-500 text-sm'>{userErrors.surname.message}</p>
          )}

          <Input type='text' placeholder='CPF' {...registerUser('cpf')} />
          {userErrors.cpf && (
            <p className='text-red-500 text-sm'>{userErrors.cpf.message}</p>
          )}

          <Input
            type='text'
            placeholder='Telefone'
            {...registerUser('phone')}
          />
          {userErrors.phone && (
            <p className='text-red-500 text-sm'>{userErrors.phone.message}</p>
          )}

          <Button type='submit' disabled={submittingUser}>
            {submittingUser ? 'Enviando...' : 'Finalizar cadastro'}
          </Button>
        </form>
      )}
    </div>
  );
};
