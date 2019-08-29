import React from 'react';
import Styles from './FooterInfoHelp.module.css';
import {NavBarList} from '../../../Header/Navbar/NavBarList/NavBarList'
import {NavItem} from '../../../Header/Navbar/NavBarList/NavItem/NavItem'

export const FooterInfoHelp = (props) => {
    return (
        <div className={Styles.footerHelpContainer}>
            <h2>Help</h2>
            <div className={Styles.footerList}>
            <NavBarList>
                <NavItem text="Shipping Information"/>
                <NavItem text="Returns &amp; Exchange"/>
                <NavItem text="Terms &amp; Conditions"/>
                <NavItem text="Privacy Policy"/>
            </NavBarList>
            <NavBarList>
                <NavItem text="FAQs"/>
                <NavItem text="Contact"/>
            </NavBarList>
            </div>
            {/*<div className={Styles.footerBlocList}>*/}
            {/*    <ul>*/}
            {/*        <li><a href="#">Shipping Information</a></li>*/}
            {/*        <li><a href="#">Returns &amp; Exchange</a></li>*/}
            {/*        <li><a href="#">Terms &amp; Conditions</a></li>*/}
            {/*        <li><a href="#">Privacy Policy</a></li>*/}
            {/*    </ul>*/}
            {/*    <ul>*/}
            {/*        <li><a href="#">FAQs</a></li>*/}
            {/*        <li><a href="#">Contact</a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    )
}