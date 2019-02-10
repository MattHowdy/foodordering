import React from 'react';

import classes from './Footer.css';
import FooterItems from './FooterItems';


const footer = () => (
    <footer className={classes.Footer}>
        <nav>
            <FooterItems/>
        </nav>
    </footer>
)



export default footer;