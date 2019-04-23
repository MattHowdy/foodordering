const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');


// get all items
router.get('/items', (req,res) =>{
    itemController.getAll(req,res)
});


// main page get all categories
router.get('/categories', (req,res) =>{
    itemController.getAllCategories(req,res)
});


//get items by Category
router.post('/category/:category', (req,res) =>{
    itemController.getItemsByCategory(req,res)
});


//get one item
router.get('/item/:id', (req,res) =>{
    itemController.getItem(req,res)
});


module.exports = router;
