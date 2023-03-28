import React from 'react';
import Search from './Search/Search';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img src={logo} />
            </div>
            <Search />
        </div>
    );
};

export default Navbar;
