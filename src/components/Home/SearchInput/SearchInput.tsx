import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

interface SearchInputProps {
  isMobile?: boolean; // se true, exibe versão mobile, se false ou undefined, versão desktop
}

export const SearchInput = ({ isMobile = false }: SearchInputProps) => {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      const encodedQuery = encodeURIComponent(query.trim());
      navigate(`/busca?query=${encodedQuery}`);
    }
  };

  return (
    <Input
      className={clsx(
        'bg-white pl-5 search rounded-full',
        isMobile ? 'block md:hidden rounded-none py-5' : 'hidden md:block',
      )}
      placeholder='O que você está procurando?'
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
};
