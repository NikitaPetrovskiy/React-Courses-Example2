import React from 'react';
import Styles from './Fotter.module.css';
import {FooterBtnToHome, BTNICON} from './FooterBtnToHome';
import {FooterInfoBloc} from './FooterInfoBloc';
import {FooterCopyrightBloc} from './FooterCopyrightBloc';

export const Footer = (props) => {
    return (
        <footer className={Styles.footerContainer}>
            <FooterBtnToHome icon={BTNICON}/>
            <FooterInfoBloc />
            <FooterCopyrightBloc />
        </footer>
    )
}