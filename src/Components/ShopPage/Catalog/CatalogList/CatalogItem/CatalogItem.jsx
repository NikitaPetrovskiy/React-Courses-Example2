import React from 'react';
import Styles from './CatalogItem.module.css';

export const CatalogItem = (props) => {
    return (
        <div className={Styles.catalogItem}>
            <a><img src={props.img}/></a>
            <h3><a>{props.name}</a></h3>
            {props.sale && <span className={Styles.sale}>{props.sale}%</span>}
            <p>{props.oldPrice && <span className={Styles.priceSale}>$ {props.oldPrice}</span>}
                $ {props.price}
            </p>
        </div>
    )
}