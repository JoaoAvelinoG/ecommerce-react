import { useLocation } from 'react-router-dom';

export default function ProductPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';
  console.log('Query de busca: ', query);

  return (
    <div>
      <p>Produtos filtrados!!!!!!</p>
    </div>
  );
}
