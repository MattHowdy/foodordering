const mongoose = require('mongoose');


let ItemSchema = new mongoose.Schema(
    {
        Category: String,
        Description: String,
        Name: String,
        Price: Number,
        Spicy: Number,
        Vegatarian: Number
    }
);

module.exports = mongoose.model('Item', ItemSchema);

