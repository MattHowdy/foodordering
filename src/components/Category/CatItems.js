import React, {Component} from 'react';
import classes from './CatItems.css';


class CatItems extends Component{
    render() {
        let hTag;

        if(this.props.children.length !== 0){
            hTag = <h1>Try out something new</h1>
        }
        return (
            <div className={classes.Layout}>
                {hTag}
                <div className={classes.CatItems}>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default CatItems;
