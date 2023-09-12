import { Phone, FacebookTag, Instagram, LinkedIn } from "iconoir-react";
import React, { } from "react";

import Logo from "../images/val-white.svg";

const Footer = () => { 
  return (
    <div className="bg-[--color-secondary] relative">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="pt-16 pb-10 flex flex-col lg:flex-row gap-10 justify-between items-start md:pb-20">
          <img src={Logo} alt="" />
          <div>
            <p className="text-white text-[20px] pb-6">UBICANOS</p>
            <div>
              <p className="text-white font-light pb-2">Av. Víctor Andrés Belaunde N° 181 - Of. 302 - San Isidro. Lima - Perú.</p>
              <a className="flex items-center text-white gap-2" href="">
                <Phone color="white" height={20} width={20} />
                <span className="font-light">415 1415</span>
              </a>
            </div>
          </div>
          <div>
            <p className="text-white text-[20px] pb-6">SIGUENOS</p>
            <ul className="flex items-center gap-5">
              <li>
                <a className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-primary] rounded-sm" href="">
                  <FacebookTag color="white" height={24} width={24} />
                </a>
              </li>
              <li>
                <a className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-primary] rounded-sm" href="">
                  <Instagram color="white" height={24} width={24} />
                </a>
              </li>
              <li>
                <a className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-primary] rounded-sm" href="">
                  <LinkedIn color="white" height={24} width={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#7F8387] flex items-center justify-between flex-col lg:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 py-6">
            <a className="text-white font-light underline text-sm" href="">Términos y Condiciones</a>
            <a className="text-white font-light underline text-sm" href="">Políticas de Privacidad</a>
            <a className="text-white font-light underline text-sm" href="">Libro de Reclamaciones</a>
          </div>
          <p className="text-white font-light text-sm pb-6 md:py-6">2023 © Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
