import React, { Component } from 'react';

const Navbar = props => {
    return (
            <nav className="bg-black text-white py-4 px-8">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">MyApp</div>
                    <ul className="flex space-x-6">
                        <li>{props.productscount}</li>
                    </ul>
                </div>
            </nav>
        );
}
 
export default Navbar;
