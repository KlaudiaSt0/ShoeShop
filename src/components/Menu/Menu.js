import React from 'react';
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';



const Menu = () => {
    return <header className="nav">
                        <Link to="/" className="home">ShoeShop</Link>

                        <nav className="link_container">

                            <Link to="/women" className="link_single">Women</Link>

                            <Link to="/men" className="link_single">Men</Link>

                            <Link to="/kids" className="link_single">Kids</Link>

                            <Link to="/outlet" className="link_single">Outlet</Link>

                            <Link to="/blog" className="link_single">BLog</Link>
                        </nav>

                    </header>

};

export default Menu;