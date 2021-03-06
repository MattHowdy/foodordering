const { Item }  = require('../db/sequelize');
const Sequelize = require('sequelize');


module.exports = {
    getAll: (req, res) => {
        Item.findAll().then(item => res.json(item))
    },
    getAllCategories : (req, res) =>{
        Item.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('category')) ,'category'],
            ]
        }).then(category => res.json(category))
    },
   getItem : (req,res) => {
       Item.findAll({
           where: {
               id: req.params.id
           },
           attributes: ['menuitems', 'id'],
       }).then(item => res.json(item));
   },
    getItemsByCategory: (req,res) =>{
        Item.findAll({
            where: {
                category: req.params.category
            },
            attributes: ['id', 'category', 'description','name', 'price','spicy','vegetarian'],
        }).then(item => res.json(item));
    }
}