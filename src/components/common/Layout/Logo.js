import React from 'react';

import image from '../../../assets/images/Logo/Logo-circle-full.png';


const logo = () => {
    return (
        <a href='/'>
            <img src={image} alt="Go&Get" height={150}/>
        </a>
    );
};

export default logo;
