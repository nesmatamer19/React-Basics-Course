import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
            <nav className="bg-gray-500 text-white py-2 px-8">
                <div className="flex justify-between items-center mt-3">
                    <ul className="flex space-x-6">
                        <li><NavLink to="/cart" className={({isActive}) =>  `${isActive ? 'focus:text-blue-300 text-blue-300 no-underline decoration-none' : 'text-black no-underline decoration-none'}`}>Shopping Cart</NavLink></li>
                        <li><NavLink to="/menu" className={({isActive}) =>  `${isActive ? 'focus:text-blue-300 text-blue-300 no-underline decoration-none' : 'text-black no-underline decoration-none'}`}>Menu</NavLink></li>
                        <li><NavLink to="/dashboard" className={({isActive}) =>  `${isActive ? 'focus:text-blue-300 text-blue-300 no-underline decoration-none' : 'text-black no-underline decoration-none'}`}>Admin</NavLink></li>
                        <li><NavLink to="/login" className={({isActive}) =>  `${isActive ? 'focus:text-blue-300 text-blue-300 no-underline decoration-none' : 'text-black no-underline decoration-none'}`}>Login</NavLink></li>
                        <li><NavLink to="/posts" className={({isActive}) =>  `${isActive ? 'focus:text-blue-300 text-blue-300 no-underline decoration-none' : 'text-black no-underline decoration-none'}`}>Posts</NavLink></li>
                    </ul>
                    <i className="fa-solid fa-cart-arrow-down flex">{props.itemsCount}</i>
                </div>
            </nav>
        );
}
 
export default Navbar;
