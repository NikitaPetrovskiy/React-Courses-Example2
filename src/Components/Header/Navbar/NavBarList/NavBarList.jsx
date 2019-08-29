import React from 'react';
import Styles from './NavBarList.module.css';
import { NavItem } from "./NavItem";

export const NavBarList = (props) => {
    return (
        <ul className={Styles.navBarList}>
            {props.children}
        </ul>
    )
}