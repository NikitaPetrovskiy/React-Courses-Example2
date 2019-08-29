import React from 'react';
import Styles from './ContactNavItem.module.css';

export const ContactNavItem = (props) => {
    return (
            <div>
                <div className="icon">
                    <span className={props.iconImg}></span>
                </div>
                <span className={Styles.text}>{props.text}</span>
        </div>
    )
}