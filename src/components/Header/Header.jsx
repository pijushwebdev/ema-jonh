import React, { useContext } from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    return (
        <nav className='header p-4 flex justify-between px-10'>
            <div className='flex items-center w-36'>
                <Link to='/'><img className='w-36' src={logo} alt="" /></Link>
            </div>
            <div className='mr-4 flex items-center'>
                
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>

                {user ?
                    <button className='text-white py-1 px-2 bg-fuchsia-800 rounded-md' onClick={logOut}>Sign Out</button>
                    :
                    <>
                        <Link to='/sign-up'>SignUp</Link>
                        <Link to="login">Login</Link>
                    </>

                }

            </div>
        </nav>
    );
};

export default Header;