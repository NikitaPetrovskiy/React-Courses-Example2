import React from 'react';
import Styles from './CatalogPageButtons.module.css';
const PREVPAGE = '<';
const NEXTPAGE = '>';

export const CatalogPageButtons = (props) => {
    return (
        <div className={Styles.buttonsContainer} >
            <ul className={Styles.buttonsList}>
                <li><a href="#">{PREVPAGE}</a></li>
                <li><span className={Styles.active}>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">{NEXTPAGE}</a></li>
            </ul>
        </div>
    )
}