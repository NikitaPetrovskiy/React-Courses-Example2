import React from 'react';
import Styles from './FooterInfoBloc.module.css';
import {FooterInfoDescr} from './FooterInfoDescr';
import {FooterInfoMenu} from './FooterInfoMenu';
import {FooterInfoHelp} from './FooterInfoHelp';
import {FooterIfoContacts} from './FooterIfoContacts';

export const FooterInfoBloc = (props) => {
    return (
        <div className={Styles.footerInfoContainer}>
            <FooterInfoDescr />
            <FooterInfoMenu />
            <FooterInfoHelp />
            <FooterIfoContacts />
        </div>
    )
}