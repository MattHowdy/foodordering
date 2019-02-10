import React from 'react';

import classes from './FooterItem.css';


const footerItem = (props) => (
    <li className={classes.FooterItem}>
        <a href={props.link}>
            {props.children}
        </a>
    </li>
);

export default footerItem;