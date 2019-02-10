import React from 'react';

import classes from './Button.css';

const button = (props) => {

    return (
        (props.addItem) ?<button className={classes.Button} onClick={()=> props.addItem(props.id)}>{props.text}</button>
        :
        <button className={[classes.Button,classes[props.type]].join(" ")} onClick={props.clicked}>
            {props.text}
        </button>
    );
};

export default button;
