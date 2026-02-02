import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
            <nav className="bg-black text-white py-4 px-8">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Navbar</div>
                    <ul className="flex space-x-6">
                        <li><NavLink state= "666" to="/" className={({isActive}) =>  `${isActive ? 'focus:text-red-300' : ''}`}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({isActive}) =>  `${isActive ? 'focus:text-red-300' : ''}`}>About</NavLink></li>
                        <li><NavLink to="/shopping-cart" className={({isActive}) =>  `${isActive ? 'focus:text-red-300' : ''}`}>Shopping Cart</NavLink></li>
                        <li><NavLink to="/dashboard" className={({isActive}) =>  `${isActive ? 'focus:text-red-300' : ''}`}>Dashboard</NavLink></li>
                        <li><NavLink to="/post/1" className={({isActive}) =>  `${isActive ? 'focus:text-red-300' : ''}`}>Post</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
}
 
export default Navbar;
