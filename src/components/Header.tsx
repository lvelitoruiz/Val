import { FacebookTag, Instagram, LinkedIn } from "iconoir-react";
import React, { } from "react";

const Header = () => { 
  return (
    <div className="fixed w-full z-10">
      <div className="bg-white flex items-center justify-between h-[80px] shadow-[0_5px_20px_0_rgba(66,66,66,0.10)] px-10">
        <a href="">Logo</a>
        <div className="flex items-center gap-10">
          <nav>
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-[--color-secondary] uppercase font-semibold" href="">Nosotros</a>
              </li>
              <li>
                <a className="text-[--color-secondary] uppercase font-semibold" href="">Proyectos en venta</a>
              </li>
            </ul>
          </nav>
          <button className="w-[216px] bg-[--color-primary] h-[48px] flex items-center justify-center text-white uppercase font-semibold rounded">
            <span>Cotiza ahora</span>
          </button>
          <ul className="flex items-center gap-5">
            <li>
              <a className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-secondary] rounded-sm" href="">
                <FacebookTag color="white" height={24} width={24} />
              </a>
            </li>
            <li>
              <a className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-secondary] rounded-sm" href="">
                <Instagram color="white" height={24} width={24} />
              </a>
            </li>
            <li>
              <a className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-secondary] rounded-sm" href="">
                <LinkedIn color="white" height={24} width={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
