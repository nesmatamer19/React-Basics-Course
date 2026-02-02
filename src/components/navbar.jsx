import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
            <nav className="bg-black text-white py-4 px-8">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Navbar</div>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                    </ul>
                </div>
            </nav>
        );
}
 
export default Navbar;
