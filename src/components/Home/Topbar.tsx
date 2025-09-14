export const Topbar = () => {
  return (
    <div className='wrapper-topbar w-full hidden md:flex py-1 px-4 bg-violet-700'>
      <div className='topbar w-full'>
        {/* Conteudo de texto da topbar */}
        <div className='topbar__content flex justify-between items-center text-white'>
          {/* Parte da esquerda */}
          <div className='topbar__left'>
            <ul className='topbar__links flex gap-4'>
              <li className='topbar__links__item'>
                <p>Logo</p>
              </li>
              <li className='topbar__links__item'>
                <a className='text-sm' href='#'>
                  Produtos de moda com até 70% de OFF
                </a>
              </li>
            </ul>
          </div>

          {/* Parte da Direita */}
          <div className='topbar__right'>
            <ul className='topbar__links flex gap-4'>
              <li className='topbar__links__item'>
                <p className='text-sm'>Acessibilidade</p>
              </li>
              <li className='topbar__links__item'>
                <p className='text-sm'>Tire suas dúvidas</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
