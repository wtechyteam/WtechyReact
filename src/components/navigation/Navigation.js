import React from 'react';
import MenuItem from './MenuItem';
import menuData from '../data/menuData.json';


const Navigation = () => {
  return (
      <ul className='menu_wrap'>
          {menuData.menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
      </ul>

  );
};

export default Navigation;