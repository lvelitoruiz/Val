import { Link } from 'gatsby';
import { NavArrowDown } from 'iconoir-react'
import React, { useEffect, useState } from 'react'

interface item {
    name: string,
    url: string,
    items: {
        text: string,
        url: string,
      }[]
}

export const LinkDropdown = ({ name, url, items }: item) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        console.log('from children: ',items,name);
    },[items]);


    return (
        <>
            {
                (name !== null && name !== undefined) ?
                    (
                        <div className='relative'>
                            <div>
                                <button
                                    onClick={toggleDropdown}
                                    type="button"
                                    className="text-[--color-secondary] uppercase font-semibold flex justify-center items-center gap-2"
                                    id="options-menu"
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                >
                                    <span>{name}</span>
                                    <span className={`${isOpen ? 'transform rotate-180' : ''}`}>
                                        <NavArrowDown color="#313E48" height={24} width={24} />
                                    </span>
                                </button>
                            </div>

                            <>{
                                isOpen && (
                                    <div
                                        className="origin-top-right lg:absolute lg:right-0 mt-2 left-0 rounded lg:shadow-lg bg-white lg:ring-1 lg:ring-black lg:ring-opacity-5"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <div className="py-1" role="none">
                                            {
                                                items !== undefined && items.map((item: any, index: number) => {
                                                    return (
                                                        <Link
                                                            to={item.url}
                                                            className="text-center lg:text-left block px-4 py-2 text-sm text-[--color-secondary] hover:bg-[--color-primary] hover:text-white"
                                                            role="menuitem"
                                                        >
                                                            {item.text}
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            }</>
                        </div>
                    ) : <p>not here</p>

            }
        </>
    )
}
