import React from 'react';
import Styles from './NavLogo.module.css';

export const NavLogo = (props) => {
    return (
        <a className={Styles.navbarBrand} href="#">{props.text}</a>
    )
}