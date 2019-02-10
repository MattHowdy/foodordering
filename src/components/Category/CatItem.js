import React, {Component} from 'react';
import classes from './CatItem.css';

import Button from '../common/UI/Button'


class CatItem extends Component{
    render() {
        let category = this.props.category;
        let spicy;
        let vega;

        if(this.props.spicy >0){
            spicy = <i className="fas fa-pepper-hot"/>
        }

        if(this.props.vegetarian > 0) {
            vega = <i className="fas fa-carrot"/>
        }
        return (

            <div className={classes.CatItem}>
                <img src={require("../../assets/images/"+category+".jpg")} alt={category} width={250}/>
                <div className={classes.Name}>{this.props.name}</div>
                <div className={classes.Description}>{this.props.description}</div>
                <div>{this.props.price} Ft</div>
                {spicy}
                {vega}
                <Button text="+" addItem={this.props.clicked} id={this.props.id}/>
            </div>
        );
    }
};

export default CatItem;
