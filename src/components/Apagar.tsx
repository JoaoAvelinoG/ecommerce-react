import { useGeneralStore } from '../stores/useGeneralStore';

export function Apagar() {
  const { currentPageData, baseUrl, setCurrentPageData } = useGeneralStore();

  return (
    <div>
      <h1>Base URL: {baseUrl}</h1>
      <h2>Dados da Página: {JSON.stringify(currentPageData)}</h2>
      <p>{currentPageData?.title}</p>
      <button
        onClick={() =>
          setCurrentPageData({ title: 'Home', banner: 'banner.png' })
        }
      >
        Atualizar Dados
      </button>
    </div>
  );
}
