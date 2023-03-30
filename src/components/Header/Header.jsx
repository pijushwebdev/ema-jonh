import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'
const Header = () => {
    return (
        <nav className='header p-4 flex justify-between px-10'>
            <div>
            <img className='' src={logo} alt="" />
            </div>
            <div className='mr-4 flex items-center'>
                <a href="#">Order</a>
                <a href="#">Oder Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
            

        
        </nav>
    );
};

export default Header;