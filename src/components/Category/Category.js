import React, {Component} from 'react';
import classes from './Category.css';


class Category extends Component{
    render() {
        let category = this.props.category;

        return (
            <div className={classes.Category} onClick={()=> this.props.clicked(category)}>
                <img src={require("../../assets/images/"+category+".jpg")} alt={category} width={380}/>
                <div className={classes.Text}>{category}</div>
            </div>
        );
    }
};

export default Category;
