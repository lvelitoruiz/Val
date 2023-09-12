import { NavArrowDown } from 'iconoir-react';
import React, { useState } from 'react';

const DropdownHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="text-[--color-secondary] uppercase font-semibold flex justify-center items-center gap-2"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <span>Proyectos en venta</span>
          <span className={`${isOpen ? 'transform rotate-180' : ''}`}>
            <NavArrowDown color="#313E48" height={24} width={24} />
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right lg:absolute lg:right-0 mt-2 left-0 rounded lg:shadow-lg bg-white lg:ring-1 lg:ring-black lg:ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-center lg:text-left block px-4 py-2 text-sm text-[--color-secondary] hover:bg-[--color-primary] hover:text-white"
              role="menuitem"
            >
              Top Life
            </a>
            <a
              href="#"
              className="text-center lg:text-left block px-4 py-2 text-sm text-[--color-secondary] hover:bg-[--color-primary] hover:text-white"
              role="menuitem"
            >
              Oxapampa
            </a>
            <a
              href="#"
              className="text-center lg:text-left block px-4 py-2 text-sm text-[--color-secondary] hover:bg-[--color-primary] hover:text-white"
              role="menuitem"
            >
              Olmos
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownHeader;
