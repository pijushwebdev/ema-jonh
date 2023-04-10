import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header p-4 flex justify-between px-10'>
            <div>
            <img className='' src={logo} alt="" />
            </div>
            <div className='mr-4 flex items-center'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;