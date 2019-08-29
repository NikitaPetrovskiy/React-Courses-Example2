import React from 'react';
import Styles from './CatalogList.module.css';
import {CatalogItem} from "./CatalogItem";

export class CatalogList extends React.Component{
    constructor(props) {
        super(props);
        this.state = { products:
                [
                    {id:1, name: 'Bell Pepper', price: '80', img: 'product1', sale: '30', oldPrice: '120'},
                    {id:2, name: 'Strawberry', price: '120', img: 'product2'},
                    {id:3, name: 'Green Beans', price: '130', img: 'product3'},
                    {id:4, name: 'Purple Cabbage', price: '110', img: 'product4'},
                    {id:5, name: 'Tomatoe', price: '80', img: 'product5', sale: '20', oldPrice: '120'},
                    {id:6, name: 'Brocolli', price: '120', img: 'product6'},
                    {id:7, name: 'Carrots', price: '120', img: 'product7'},
                    {id:8, name: 'Fruit Juice', price: '60', img: 'product8'},
                    {id:9, name: 'Onion', price: '80', img: 'product9'},
                    {id:10, name: 'Apple', price: '50', img: 'product10'},
                    {id:11, name: 'Garlic', price: '30', img: 'product11', sale: '40', oldPrice: '120'},
                    {id:12, name: 'Chilli', price: '150', img: 'product12'},
            ]}
    }
    render() {
        return (
            <div className={Styles.catalogList}>
                {this.state.products.map(prod => {
                    return <CatalogItem  key={prod.id} sale={prod.sale} name={prod.name}
                                         img={require(`./images/${prod.img}.jpg`)}
                                         oldPrice={prod.oldPrice} price={prod.price}/>
                })}
            </div>
        )
    }
}