import { Container } from './Container';
import clsx from 'clsx';

export type ImageItem = {
  image: string;
  link: string;
  description: string;
};

type GridProps = {
  title?: string;
  colsQtt?: number;
  data: ImageItem[];
};

export const Grid = ({ title = '', colsQtt = 3, data }: GridProps) => {
  // Mapeia a quantidade de colunas para classes Tailwind válidas
  const colsClass =
    {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    }[colsQtt] || 'grid-cols-3';

  return (
    <Container className='mt-8'>
      {title && <h2 className='text-2xl font-bold mb-4'>{title}</h2>}
      <div
        className={clsx('grid justify-items-center gap-10 my-10', colsClass)}
      >
        {data.map(item => (
          <img key={item.description} src={item.image} alt={item.description} />
        ))}
      </div>
    </Container>
  );
};
