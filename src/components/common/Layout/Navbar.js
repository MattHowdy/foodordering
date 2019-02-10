import React, {Component} from 'react'

import Button from '../../common/UI/Button'
import Logo from './Logo';
import classes from './Navbar.css';

class Navbar extends Component{
    render() {
        let button = <Button text="Login"/>;

        return (
            <div className={classes.Row}>
                <div className={classes.Column}>
                    <Logo/>
                </div>
                <div className={classes.Column}>
                    <a href={'/login'}><div className={classes.button}>{button}</div> </a>
                </div>
            </div>
        );
    }
};

export default Navbar;
