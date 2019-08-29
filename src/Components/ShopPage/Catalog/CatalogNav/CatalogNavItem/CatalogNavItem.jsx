import React from 'react';
import Styles from './CatalogNavItem.module.css';

export const CatalogNavItem = (props) => {
    return (
        <li className={Styles.catalogItem}>
            <a href={props.link}>{props.text}</a>
        </li>
    )
}