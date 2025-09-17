import { mainNavItems } from '@/data/mainNavItems';
import { useParams } from 'react-router-dom';

export const SubCategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  // Lista apenas com categorias válidas de "/sub/..."
  const validCategories = mainNavItems
    .filter(item => item.href.startsWith('/sub/'))
    .map(item => item.href.replace('/sub/', ''));

  const isValid = category && validCategories.includes(category);

  return (
    <div style={{ padding: '2rem' }}>
      {isValid ? (
        <>
          <h1>Categoria: {category?.toUpperCase()}</h1>
          {/* Renderize aqui produtos ou conteúdo da categoria */}
        </>
      ) : (
        <>
          <h1>Categoria não encontrada</h1>
          <p>A categoria "{category}" não existe.</p>
        </>
      )}
    </div>
  );
};
