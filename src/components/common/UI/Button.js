import React from 'react';

import classes from './Button.css';

const button = (props) => {
    return (
        <button className={[classes.Button, props.type].join(" ")} onClick={props.clicked}>
            {props.text}
        </button>
    );
};

export default button;
