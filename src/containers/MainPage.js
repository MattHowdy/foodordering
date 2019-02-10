import React, {Component, Fragment} from 'react';

import axios from 'axios';
import Categories from "../components/Category/Categories";
import Category from "../components/Category/Category";
import Jumbotron from "../components/common/Jumbotron/Jumbotron";
import CatItem from '../components/Category/CatItem';
import CatItems from '../components/Category/CatItems';

const categories = "http://localhost:5000";
const itemsBy = "http://localhost:5000/items/";


class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories : [],
            items : [],
            error : null,
            user : 1,
        };
    }

    componentDidMount() {
        axios.get(categories)
            .then(response => {
                console.log(response)
                this.setState({categories: response.data});
            })
            .catch(error => {
                    this.setState({error: error});
                    console.log("Couldn't load categories: " + error)
                }
            )
    }

    loadItemsRelatedToCategory =(category)=>{
        axios.post(itemsBy + category)
            .then(response => {
                this.setState({items: response.data});
                console.log(response.data)
            })
            .catch(error => {
                    this.setState({error: error});
                    console.log("Couldn't load categories: " + error)
                }
            )
    }

    addITemHandler=(itemId)=>{

        // redirect user to login page
        if(this.state.user === null){
            this.props.history.push('/login')
        }

        //insert item to user's cart if user presents
        console.log("this item was clicked "+itemId);
    }



    render(){
        let allCategories = this.state.categories.map(category => (
            <Category
                clicked={this.loadItemsRelatedToCategory}
                key={category.category}
                category={category.category}
            />
        ));

        let items = [];
        if(this.state.items){
            items = this.state.items.map(item =>(
                <CatItem
                    clicked={this.addITemHandler}
                    id={item.id}
                    key={item.id}
                    category={item.category}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    spicy={item.spicy}
                    vegetarian={item.vegetarian}
                />
            ))
        }

        return (
            <Fragment>
                <Jumbotron/>
                <Categories>{allCategories}</Categories>
                <CatItems>{items}</CatItems>
            </Fragment>
        );
    }
}



export default MainPage;