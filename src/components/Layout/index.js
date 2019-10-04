import React, { Component } from 'react';
import Nav from './Navbar/Navbar';
import './Layout.css'
const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className="container">
                {children}
            </div>

        </>
    );
}

export default Layout;