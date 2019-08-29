import React from 'react';
import Styles from './ContactNav.module.css';
import {ContactNavItem} from './ContactNavItem';

export const ContactNav = (props) => {
    return (
        <div className={Styles.bgPrimary}>
            <ContactNavItem iconImg="icon-phone2" text="+ 1235 2355 98" />
            <ContactNavItem iconImg="icon-paper-plane" text="youremail@email.com" />
            <ContactNavItem iconImg="icon-phone2" text="3-5 Business days delivery &amp; Free Returns" />
        </div>
    )
}