import React from 'react';
import { Link } from 'react-router-dom';


const MenuItem = ({ item }) => {
    return (
      <li >
        <Link className={item.customClass} to={item.link !== '' ? item.link : undefined}>{item.title}</Link>
        {item.subMenu && (
          <ul className={item.menuType}>
            {item.subMenu.map((subItem, index) => (
              <MenuItem key={index} item={subItem} />
            ))}
          </ul>
        )}
      </li>
    );
  };
  
  export default MenuItem;