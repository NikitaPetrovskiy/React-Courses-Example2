import React from 'react';
import Styles from './FooterBtnToHome.module.css';

export const BTNICON = '^';
export const FooterBtnToHome = (props) => {
    return (
        <div className={Styles.footerBtnToHome}>
            <a href="#">
                <span className={Styles.btnIcon}>{props.icon}</span>
            </a>
        </div>
    )
}