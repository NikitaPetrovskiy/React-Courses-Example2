import React from 'react';
import Styles from './CatalogNav.module.css';
import {CatalogNavItem} from "./CatalogNavItem";

export const CatalogNav = (props) => {
    return (
        <div>
            <ul className={Styles.catalogList}>
                <CatalogNavItem link="#" text="All" />
                <CatalogNavItem link="#" text="Vegetables" />
                <CatalogNavItem link="#" text="Fruits" />
                <CatalogNavItem link="#" text="Juice" />
                <CatalogNavItem link="#" text="Dried" />
            </ul>
        </div>
    )
}