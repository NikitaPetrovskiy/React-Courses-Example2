import React from 'react';
import Styles from './SubscriberBloc.module.css';
import {SubscriberDescr} from './SubscriberDescr';
import {SubscriberForm} from './SubscriberForm';

export const SubscriberBloc = (props) => {
        return (
            <div className={Styles.subscriberContainer}>
                <SubscriberDescr title="Subcribe to our Newsletter"
                                 desc="Get e-mail updates about our latest shops and special offers" />
                <SubscriberForm placeholder="Enter email address" btnVal="Subscribe"/>
            </div>
        )
}