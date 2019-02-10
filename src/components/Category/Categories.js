import React, {Component} from 'react';
import classes from './Categories.css';


class Categories extends Component{
    render() {
        return (
            <div className={classes.Layout}>
                <h1>Select a Category</h1>
                <div className={classes.Categories}>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Categories;
