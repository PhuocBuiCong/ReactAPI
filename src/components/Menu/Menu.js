import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand">Call API</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                     <li className="active mr-4">
                       <a>Home</a>
                     </li>
                     <li>
                       <a>Products</a>
                     </li>
                </ul>    
        </nav>
        );
    }
}

export default Menu;