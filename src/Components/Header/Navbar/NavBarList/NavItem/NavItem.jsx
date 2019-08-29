import React from 'react';
import Styles from './NavItem.module.css';

export const NavItem = (props) => {
    return (
        <li className={Styles.listItem}>
            <a href={props.link || '#'}>{props.text}</a>
        </li>
    )
}