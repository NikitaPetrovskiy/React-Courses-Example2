import React from 'react';
import Styles from './FooterInfoMenu.module.css';
import {NavBarList} from '../../../Header/Navbar/NavBarList/NavBarList'
import {NavItem} from '../../../Header/Navbar/NavBarList/NavItem/NavItem'

export const FooterInfoMenu = (props) => {
    return (
        <div className={Styles.footerMenuList}>
            <h2>Menu</h2>
            <NavBarList>
                <NavItem text="Shop" />
                <NavItem text="About"/>
                <NavItem text="Journal"/>
                <NavItem text="Contact Us"/>
            </NavBarList>
        </div>
    )
}

{/*<h2>Menu</h2>*/}
{/*<ul>*/}
{/*<li><a href="#">Shop</a></li>*/}
{/*<li><a href="#">About</a></li>*/}
{/*<li><a href="#">Journal</a></li>*/}
{/*<li><a href="#">Contact Us</a></li>*/}
{/*</ul>*/}