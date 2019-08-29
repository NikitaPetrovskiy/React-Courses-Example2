import React from 'react';
import Styles from './NavBar.module.css';
import {NavLogo} from "./NavLogo";
import {NavBarList} from "./NavBarList/NavBarList";
import {NavItem} from "./NavBarList/NavItem";

export const NavBar = (props) => {
    return (
        <nav className={Styles.navBar}>
            <NavLogo text="Vegefoods"/>
            <NavBarList>
                <NavItem text="HOME"/>
                <NavItem text="SHOP" />
                <NavItem text="ABOUT" />
                <NavItem text="BLOG" />
                <NavItem text="CONTACT" />
                <NavItem text="[0]" />
            </NavBarList>
        </nav>
    )
}