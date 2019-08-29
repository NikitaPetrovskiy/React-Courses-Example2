import React from 'react';
import Styles from './Catalog.module.css';
import {CatalogNav} from './CatalogNav';
import {CatalogList} from "./CatalogList";
import {CatalogPageButtons} from './CatalogPageButtons';

export const Catalog = (props) => {
    return (
        <div className={Styles.catalog} >
            <CatalogNav />
            <CatalogList />
            <CatalogPageButtons />
        </div>
    )
}