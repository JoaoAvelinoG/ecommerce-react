import { CircleX } from 'lucide-react';

type ErrorBoxProps = {
  errorMsg?: string;
};

export const ErrorBox = ({ errorMsg = '' }: ErrorBoxProps) => {
  return (
    <div className='error-box bg-red-100 flex items-center gap-3 w-full py-3 px-6 text-red-950 rounded-xs'>
      <CircleX className='text-red-700' />
      <span className='text-sm text-red-700'>{errorMsg}</span>
    </div>
  );
};
