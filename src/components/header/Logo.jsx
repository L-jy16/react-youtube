import React from 'react'

import { MdMovieFilter } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <h1 className='header__logo'>
        <Link to='/'>
            <em><MdMovieFilter/></em>
            <span>Animation<br/>Youtube</span>
        </Link>
    </h1>
  )
}

export default Logo