import React from 'react';
// import Styles from 'Header.module.css'
import { ContactNav } from './ContactNav';
import { NavBar } from './Navbar'

export const Header = (props) => {
    return (
        <div>
            <ContactNav />
            <NavBar />
        </div>
    )
}