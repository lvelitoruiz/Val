import { NavArrowDown } from 'iconoir-react';
import React, { useEffect, useState } from 'react';
import { LinkDropdown } from './LinkDropdown';

interface item {
  text: string,
  url: string,
  items: {
    text: string,
    url: string,
  }[]
}

// interface items {
//   links: item[],
// }

const DropdownHeader = ({links}: any) => {
  

  useEffect( () => {
    console.log('the links: ',links);
  },[links]);

  return (
    <div className="relative flex gap-2">
      {
        links.map( (link: item,index: number) => {
          return(
            <LinkDropdown name={link.text} url={link.url} items={link.items} key={index} />
          )
        })
      }
    </div>
  );
};

export default DropdownHeader;
