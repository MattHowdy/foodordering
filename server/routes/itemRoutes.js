const express = require('express');
const router = express.Router();
const itemService = require('../services/itemService');


// get all items
router.get('/items', (req,res) =>{
    itemService.getAll(req,res)
});


// main page get all categories
router.get('/categories', (req,res) =>{
    itemService.getAllCategories(req,res)
});


//get items by Category
router.post('/category/:category', (req,res) =>{
    itemService.getItemsByCategory(req,res)
});


//get one item
router.get('/item/:id', (req,res) =>{
    itemService.getItem(req,res)
});


module.exports = router;
