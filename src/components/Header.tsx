import { AlignRight, DeleteCircle, FacebookTag, Instagram, LinkedIn } from "iconoir-react";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import DropdownHeader from "./DropdownHeader";
import { Logo } from "./Logo";
import { processInfo } from "../utils/processInfo";
import { Link } from "gatsby";

const Header = () => {

  const [data,setData] = useState([]);

  const [element,setElement] = useState<{text: string, url: string}>();

  const getInfo = async () => {
    const dataResponse: any = await processInfo("menus");


    
    setElement(dataResponse.data[0].attributes.menuLinks.shift())
    setData(dataResponse.data[0].attributes.menuLinks)
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect( () => {
    getInfo();
  },[]);

  // useEffect( () => {
  //   console.log(element,data);
  // },[element,data]);

  return (
    <div className="fixed w-full z-10">
      <div className="bg-white flex items-center justify-between h-[80px] shadow-[0_5px_20px_0_rgba(66,66,66,0.10)] px-6 lg:px-10">
        <Link to="/">
          <Logo />
        </Link>
        <div>

          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <AlignRight color="#313E48" height={30} width={30} />
            </button>
          </div>
          <div className={`lg:block ${menuOpen ? 'block' : 'hidden'}`}>
            <div className="fixed bg-white top-0 left-0 right-0 bottom-0 p-10 pt-20 lg:relative lg:p-0">
              <div className="lg:hidden absolute top-[22px] right-[24px]">
                <button onClick={closeMenu}>
                  <DeleteCircle color="#313E48" height={30} width={30} />
                </button>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <nav className="flex flex-col lg:flex-row items-center gap-10">
                  {
                    (element !== null && element !== undefined) ? <Link className="text-[--color-secondary] uppercase font-semibold" to="/about">{element.text}</Link> : null 
                  }
                  <DropdownHeader links={data} />
                </nav>
                <Button
                  extraStyles="w-[216px] h-[48px] btn-primary"
                  label={"Cotiza ahora"}
                  customClick={(event) => console.log(event)}
                />
                <ul className="flex items-center gap-5">
                  <li>
                    <a
                      className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-secondary] rounded-sm"
                      href=""
                    >
                      <FacebookTag color="white" height={24} width={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-secondary] rounded-sm"
                      href=""
                    >
                      <Instagram color="white" height={24} width={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-secondary] rounded-sm"
                      href=""
                    >
                      <LinkedIn color="white" height={24} width={24} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
