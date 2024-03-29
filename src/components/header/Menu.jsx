import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { menuText, keywordText } from '../../data/header'

const Menu = () => {
    const location = useLocation();
    // console.log(location);

  return (
    <nav className='header__menu'>
        <ul className='menu'>
            {menuText.map((menu, key) => ( 
                <li key={key} className={location.pathname === menu.src ? 'active': ''}>
                    <Link to={menu.src}>
                        {menu.icon} {menu.title}
                    </Link>
                </li>
            ))}
        </ul>
        <ul className='keyword'>
            <ul>
                {keywordText.map((keyword, key) => (
                    <li key={key} className={location.pathname === keyword.src ? 'active': ''}>
                        <Link to={keyword.src}>
                            {keyword.icon}{keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </ul>
    </nav>
  )
}

export default Menu