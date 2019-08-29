import React from 'react';
import Styles from './ShopPageTitleBloc.module.css';

export const ShopPageTitleBloc = (props) => {
    return (
        <div className={Styles.shopPageBg}>
            <div className={Styles.content}>
                <p><span><a href={props.link}>{props.titleLink}</a></span>PRODUCTS</p>
                <h1 className={Styles.shopPageTitle}>{props.title}</h1>
            </div>
        </div>
    )
}