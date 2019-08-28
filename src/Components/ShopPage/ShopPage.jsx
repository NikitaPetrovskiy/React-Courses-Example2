import React from 'react';
// import Styles from './ShopPage.module.css';
import {ShopPageTitleBloc} from './ShopPageTitleBloc'
import {Catalog} from './Catalog';
import {SubscriberBloc} from './SubscriberBloc';

export const ShopPage = (props) => {
    return (
        <div >
            <ShopPageTitleBloc link="#" titleLink="HOME" title="PRODUCTS"/>
            <Catalog />
            <SubscriberBloc />
        </div>
    )
}