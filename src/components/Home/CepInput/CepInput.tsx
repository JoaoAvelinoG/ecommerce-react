import { MapPinIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useGeneralStore } from '@/stores/useGeneralStore';
import { formatCep, isValidCep } from '@/utils/cep';

export const CepInput = () => {
  const setCurrentPageData = useGeneralStore(state => state.setCurrentPageData);
  const [isOpen, setIsOpen] = useState(false);

  // Ref do input uncontrolled
  const inputRef = useRef<HTMLInputElement>(null);
  const [lastValue, setLastValue] = useState('Informe o CEP');

  // Foca o input quando abrir o modal
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Formata em tempo real enquanto digita
  const handleInput = () => {
    if (!inputRef.current) return;
    inputRef.current.value = formatCep(inputRef.current.value);
  };

  const handleSubmit = () => {
    if (!inputRef.current) return;

    const cepValue = inputRef.current.value;

    if (!isValidCep(cepValue)) {
      alert('CEP inválido! Informe no formato 00000-000');
      return;
    }

    if (cepValue && cepValue.trim() !== '') {
      // Se tem valor válido → atualiza o "último valor"
      setLastValue(cepValue);
    }

    setCurrentPageData({ cepInput: cepValue });
    setIsOpen(false);
    console.log('CEP submitted:', cepValue);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className='navbar__zipcode-content cursor-pointer text-violet-950 flex items-center gap-2'>
          <MapPinIcon />
          <span className='flex flex-col text-sm w-full'>
            Enviar para:
            <strong>{inputRef.current?.value || lastValue}</strong>
          </span>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Consultar frete e prazo de entrega</DialogTitle>
          <DialogDescription className='mt-2 max-w-[300px]'>
            O valor e o prazo de entrega podem variar de acordo com a sua
            localização.
          </DialogDescription>

          <Input
            ref={inputRef} // input uncontrolled
            className='mt-4 mb-3 px-5 py-5'
            placeholder='Informe seu CEP'
            onInput={handleInput} // formatação em tempo real
            maxLength={9} // 8 números + hífen
          />

          <Button
            className='cursor-pointer bg-violet-900 hover:bg-violet-950'
            onClick={handleSubmit}
          >
            Continuar
          </Button>

          <span className='text-sm text-center text-zinc-600 mt-4'>
            Já tem uma conta?
          </span>

          <Button
            variant='outline'
            className='cursor-pointer text-violet-950 border-violet-400'
          >
            <Link to='/signin'>Fazer Login</Link>
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
