const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemControllerl');


// main page get all categories
router.get('/', (req,res) =>{
    itemController.getAllCategories(req,res)
});


// get all items
router.get('/items', (req,res) =>{
    itemController.getAll(req,res)
});


//get one item
router.get('/items/:id', (req,res) =>{
    itemController.getItem(req,res)
});


//get items by category
router.post('/items/:category', (req,res) =>{
    itemController.getItemsByCategory(req,res)
});


module.exports = router;
