import React from 'react';
import Styles from './FooterInfoDescr.module.css';

export const FooterInfoDescr = (props) => {
    return (
            <div className={Styles.footerInfoContainer}>
                <h2>Vegefoods</h2>
                <p>
                    Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia.
                </p>
            </div>
    )
}