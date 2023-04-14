import React from 'react';

interface Props {
  className: string;
  handleCloseSidebar: () => void;
}

const Sidebar = ({ className, handleCloseSidebar }: Props) => {
  return (
    <div className={className}>
      <button
        className='absolute px-3 py-1 bg-white rounded-full right-2 top-2 text-secondary'
        onClick={handleCloseSidebar}
      >
        X
      </button>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
