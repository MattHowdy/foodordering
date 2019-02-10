import React, {Component} from 'react'

import classes from './Jumbotron.css';
import image from '../../../assets/images/jumbotron.jpg'
import Logo from '../../../assets/images/Logo/Logo-plain-Light.png';

class Jumbotron extends Component{
    render() {

        return (
            <div className={classes.Jumbtron}>
               <div className={classes.Row}>
                   <div className={classes.Column}>
                    <img src={image} alt="best food" height={500}/>
                   </div>
                   <div className={classes.Column}>
                       <img className={classes.Logo} src={Logo} alt="Go and Get food ordering"/>
                       <p>The Perfect Food Right to Your Door</p>
                   </div>
               </div>
            </div>
        );
    }
};

export default Jumbotron;
