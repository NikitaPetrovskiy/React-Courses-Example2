import React from 'react';
import Styles from './SubscriberDescr.module.css';

export const SubscriberDescr = (props) => {
        return (
                <div className={Styles.subsDescr}>
                    <h2>{props.title}</h2>
                    <span>{props.desc}</span>
                </div>
        )
}